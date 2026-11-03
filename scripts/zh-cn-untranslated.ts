import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { collectCandidates, hasLetters } from "../app/i18n/engine";
import { intentionalEnglish, messages, templates } from "../app/i18n/zh-CN";

const root = join(import.meta.dirname, "..", "app");
const kept = new Set(intentionalEnglish);
const showKept = process.argv.includes("--kept");

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

interface Hit {
  kind: "message" | "template";
  key: string;
  where: string;
}

const missing = new Map<string, Hit>();
const keptHits = new Map<string, string>();
let scanned = 0;

for (const file of walk(root)) {
  const code = readFileSync(file, "utf8");
  const rel = relative(join(root, ".."), file);
  let candidates;
  try {
    candidates = collectCandidates(code, file);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`parse error: ${rel}: ${message}`);
    process.exitCode = 1;
    continue;
  }
  scanned += 1;
  for (const candidate of candidates) {
    if (!hasLetters(candidate.key)) continue;
    const translated =
      candidate.kind === "template" ? templates[candidate.key] : messages[candidate.key];
    const where = `${rel}:${candidate.line}`;
    if (translated) continue;
    if (kept.has(candidate.key)) {
      if (!keptHits.has(candidate.key)) keptHits.set(candidate.key, where);
      continue;
    }
    if (!missing.has(candidate.key)) {
      missing.set(candidate.key, { kind: candidate.kind, key: candidate.key, where });
    }
  }
}

const rows = [...missing.values()].sort((a, b) => a.key.localeCompare(b.key));
if (rows.length === 0) {
  console.log(`No untranslated UI strings (${scanned} files).`);
} else {
  console.log(`${rows.length} untranslated UI strings:\n`);
  for (const row of rows) {
    console.log(`[${row.kind}] ${row.where}`);
    console.log(row.key);
    console.log("");
  }
  process.exitCode = 1;
}

if (showKept) {
  console.log(`\n${keptHits.size} strings intentionally left in English.`);
  for (const [key, where] of [...keptHits.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    console.log(`[kept] ${where}`);
    console.log(key);
    console.log("");
  }
}
