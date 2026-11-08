import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, test } from "vitest";

import { collectCandidates, parseSource, translateCode } from "~/i18n/engine";
import { intentionalEnglish, messages, templates } from "~/i18n/zh-CN";

const appRoot = join(import.meta.dirname, "../../../app");
const kept = new Set(intentionalEnglish);

function loadFormatTimeDelta(source: string): (date: Date) => string {
  const marker = "export function formatTimeDelta(date: Date): string {";
  const start = source.indexOf(marker);
  if (start < 0) {
    throw new Error("translated formatTimeDelta signature missing");
  }
  const body = source.slice(start + marker.length, source.lastIndexOf("}"));
  return new Function("date", body) as (date: Date) => string;
}

function at(formatTimeDelta: (date: Date) => string, seen: Date, deltaMs: number): string {
  const RealDate = globalThis.Date;
  const now = seen.getTime() + deltaMs;
  class FixedDate extends RealDate {
    constructor(...args: ConstructorParameters<typeof RealDate>) {
      if (args.length === 0) {
        super(now);
        return;
      }
      super(...args);
    }

    static now() {
      return now;
    }
  }

  globalThis.Date = FixedDate as DateConstructor;
  try {
    return formatTimeDelta(new RealDate(seen.getTime()));
  } finally {
    globalThis.Date = RealDate;
  }
}

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      if (name === "i18n") continue;
      walk(path, out);
    } else if (/\.[cm]?tsx?$/.test(name)) {
      out.push(path);
    }
  }
  return out;
}

describe("zh-CN UI copy", () => {
  test("every user-visible string is translated or intentionally English", () => {
    const missing: string[] = [];
    for (const file of walk(appRoot)) {
      const code = readFileSync(file, "utf8");
      for (const candidate of collectCandidates(code, file)) {
        const translated =
          candidate.kind === "template" ? templates[candidate.key] : messages[candidate.key];
        if (translated || kept.has(candidate.key)) continue;
        missing.push(`${candidate.kind} ${candidate.key}`);
      }
    }
    expect(missing).toEqual([]);
  });

  test("rewrites visible copy and date locales without touching identifiers", () => {
    const source = `
      export function Page() {
        return (
          <form>
            <h1>Welcome to Headplane</h1>
            <input name="api_key" placeholder="API Key" />
            <button>Sign In</button>
            <p>{new Date(0).toLocaleString()}</p>
            <span>{value === "accept" ? "Allow" : "No"}</span>
          </form>
        );
      }
    `;
    const next = translateCode(source, "/workspace/app/routes/example.tsx");
    expect(next).toContain("欢迎使用 Headplane");
    expect(next).toContain("登录");
    expect(next).toContain('placeholder="API 密钥"');
    expect(next).toContain('name="api_key"');
    expect(next).toContain('.toLocaleString("zh-CN")');
    expect(next).toContain('value === "accept"');
    expect(next).toContain("允许");
    expect(next).toContain("否");
  });

  test("relative-time templates interpolate every minute, hour, day, and month branch", () => {
    const file = join(appRoot, "utils/time.ts");
    const source = readFileSync(file, "utf8");
    const next = translateCode(source, file);

    expect(next).toContain("`${minutes} 分钟前`");
    expect(next).toContain("`${hours} 小时前`");
    expect(next).toContain("`${hours} 小时 ${remainingMinutes} 分钟前`");
    expect(next).toContain("`${days} 天前`");
    expect(next).toContain("`${days} 天 ${remainingHours} 小时前`");
    expect(next).toContain("`${months} 个月前`");
    expect(next).toContain("`${months} 个月 ${remainingDays} 天前`");
    expect(next).not.toContain("\\${");
    expect(parseSource(next, file).errors).toEqual([]);

    const formatTimeDelta = loadFormatTimeDelta(next);
    const seen = new Date("2026-11-08T11:11:43");
    const minute = 60_000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const cases: Array<{ delta: number; expected: string }> = [
      { delta: 20 * 1000, expected: "0 分钟前" },
      { delta: minute, expected: "1 分钟前" },
      { delta: 5 * minute, expected: "5 分钟前" },
      { delta: 59 * minute, expected: "59 分钟前" },
      { delta: hour, expected: "1 小时前" },
      { delta: 2 * hour, expected: "2 小时前" },
      { delta: 3 * hour + 11 * minute, expected: "3 小时 11 分钟前" },
      { delta: 23 * hour + minute, expected: "23 小时 1 分钟前" },
      { delta: day, expected: "1 天前" },
      { delta: 2 * day, expected: "2 天前" },
      { delta: day + 5 * hour, expected: "1 天 5 小时前" },
      { delta: 29 * day + 23 * hour, expected: "29 天 23 小时前" },
      { delta: 30 * day, expected: "1 个月前" },
      { delta: 31 * day, expected: "1 个月 1 天前" },
      { delta: 60 * day, expected: "2 个月前" },
      { delta: 62 * day, expected: "2 个月 2 天前" },
    ];

    for (const item of cases) {
      expect(at(formatTimeDelta, seen, item.delta)).toBe(item.expected);
    }
  });

  test("rewritten template literals do not escape their interpolations", () => {
    const escaped = /\\\$\{/g;
    const introduced: string[] = [];
    for (const file of walk(appRoot)) {
      const code = readFileSync(file, "utf8");
      const next = translateCode(code, file);
      const before = code.match(escaped)?.length ?? 0;
      const after = next.match(escaped)?.length ?? 0;
      if (after > before) introduced.push(file);
      expect(parseSource(next, file).errors ?? []).toEqual([]);
    }
    expect(introduced).toEqual([]);
  });

  test("duplicate DNS record check still matches the translated error", () => {
    const source = readFileSync(join(appRoot, "routes/dns/dialogs/add-record.tsx"), "utf8");
    const next = translateCode(source, join(appRoot, "routes/dns/dialogs/add-record.tsx"));
    expect(next).toContain("此记录已存在。");
    expect(next).toContain('.includes("已存在")');
    expect(
      messages["This record already exists."]?.includes(messages["already exists"] ?? ""),
    ).toBe(true);
  });
});
