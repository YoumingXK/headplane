import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, test } from "vitest";

import { collectCandidates, translateCode } from "~/i18n/engine";
import { intentionalEnglish, messages, templates } from "~/i18n/zh-CN";

const appRoot = join(import.meta.dirname, "../../../app");
const kept = new Set(intentionalEnglish);

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
