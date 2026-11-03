import { parse } from "@babel/parser";
import type { Node } from "@babel/types";

import { messages, templates } from "./zh-CN";

const PASS_THROUGH = new Set([
  "ConditionalExpression",
  "LogicalExpression",
  "ParenthesizedExpression",
  "TSAsExpression",
  "TSSatisfiesExpression",
  "TSNonNullExpression",
  "ChainExpression",
  "ArrayExpression",
]);

const SAFE_ATTRS = new Set([
  "placeholder",
  "aria-label",
  "aria-description",
  "aria-placeholder",
  "alt",
  "title",
  "label",
  "tooltip",
  "description",
  "errorMessage",
  "heading",
  "text",
  "subtitle",
  "empty",
  "emptyText",
  "hint",
  "content",
  "page",
]);

const SAFE_PROPS = new Set([
  "label",
  "title",
  "text",
  "placeholder",
  "description",
  "message",
  "content",
  "tooltip",
  "errorMessage",
  "note",
  "hint",
  "field",
  "fieldDescription",
  "empty",
  "emptyText",
  "desc",
  "heading",
  "subtitle",
  "error",
  "statusText",
]);

const CODE_TAGS = new Set(["code", "Code", "pre", "script", "style"]);

const LOCALE_METHODS = new Set(["toLocaleString", "toLocaleDateString", "toLocaleTimeString"]);

export interface Span {
  start: number;
  end: number;
  text: string;
}

export interface Candidate {
  kind: "message" | "template";
  key: string;
  file: string;
  line: number;
}

interface ExprSlot {
  /** Whitespace-collapsed expression text used in dictionary keys. */
  norm: string;
  /** Original expression source, copied into the rewritten output. */
  source: string;
}

export function normalize(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function hasLetters(value: string): boolean {
  return /[A-Za-z]/.test(value);
}

function normExpr(source: string): string {
  return source.replace(/\s+/g, " ").trim();
}

function isServerFile(filename: string): boolean {
  return filename.replaceAll("\\", "/").includes("/app/server/");
}

function isUiFile(filename: string): boolean {
  const file = filename.replaceAll("\\", "/");
  if (isServerFile(file)) return false;
  return file.includes("/app/");
}

function walk(node: Node, visit: (node: Node, parent: Node | null) => void, parent: Node | null) {
  visit(node, parent);
  for (const key of Object.keys(node)) {
    if (
      key === "loc" ||
      key === "range" ||
      key === "leadingComments" ||
      key === "trailingComments" ||
      key === "innerComments" ||
      key === "extra"
    ) {
      continue;
    }
    const value = (node as unknown as Record<string, unknown>)[key];
    if (Array.isArray(value)) {
      for (const child of value) {
        if (isNode(child)) walk(child, visit, node);
      }
    } else if (isNode(value)) {
      walk(value, visit, node);
    }
  }
}

function isNode(value: unknown): value is Node {
  return (
    value != null && typeof value === "object" && "type" in value && typeof value.type === "string"
  );
}

function landing(node: Node, parents: Map<Node, Node>): Node | null {
  let current = parents.get(node) ?? null;
  while (current && PASS_THROUGH.has(current.type)) {
    current = parents.get(current) ?? null;
  }
  return current;
}

function jsxTagName(node: Node | null): string {
  if (!node || node.type !== "JSXOpeningElement") return "";
  const name = node.name;
  if (name.type === "JSXIdentifier") return name.name;
  if (name.type === "JSXMemberExpression" && name.property.type === "JSXIdentifier") {
    return name.property.name;
  }
  return "";
}

function insideCodeTag(node: Node, parents: Map<Node, Node>): boolean {
  let current: Node | null = node;
  while (current) {
    if (current.type === "JSXElement") {
      const tag = jsxTagName(current.openingElement);
      if (CODE_TAGS.has(tag)) return true;
    }
    current = parents.get(current) ?? null;
  }
  return false;
}

function propName(node: Node): string {
  if (node.type !== "ObjectProperty" || node.computed) return "";
  if (node.key.type === "Identifier") return node.key.name;
  if (node.key.type === "StringLiteral") return node.key.value;
  return "";
}

function attrName(node: Node): string {
  if (node.type !== "JSXAttribute" || node.name.type !== "JSXIdentifier") return "";
  return node.name.name;
}

function attrIsSafe(node: Node, parents: Map<Node, Node>): boolean {
  const name = attrName(node);
  if (SAFE_ATTRS.has(name)) return true;
  if (name === "name" || name === "value" || name === "tooltip") {
    return jsxTagName(parents.get(node) ?? null) === "Attribute";
  }
  return false;
}

function calleeText(node: Node): string {
  if (node.type === "Identifier") return node.name;
  if (
    (node.type === "MemberExpression" || node.type === "OptionalMemberExpression") &&
    !node.computed &&
    node.property.type === "Identifier"
  ) {
    return node.property.name;
  }
  return "";
}

function isPresentational(node: Node, parents: Map<Node, Node>, filename: string): boolean {
  const land = landing(node, parents);
  if (!land) return false;

  if (land.type === "JSXAttribute") return attrIsSafe(land, parents);
  if (land.type === "JSXExpressionContainer") {
    const parent = parents.get(land);
    if (!parent) return false;
    if (parent.type === "JSXElement" || parent.type === "JSXFragment") return true;
    if (parent.type === "JSXAttribute") return attrIsSafe(parent, parents);
    return false;
  }
  if (land.type === "ObjectProperty") {
    const key = propName(land);
    if (SAFE_PROPS.has(key)) {
      if (isServerFile(filename)) return key === "errorMessage" || key === "statusText";
      return true;
    }
    if (isServerFile(filename)) return false;
    return (
      node.type === "StringLiteral" && node.value.includes(" ") && /[.?!…]$/.test(node.value.trim())
    );
  }
  if (land.type === "NewExpression") {
    return isUiFile(filename) && calleeText(land.callee) === "Error";
  }
  if (land.type === "CallExpression" || land.type === "OptionalCallExpression") {
    const name = calleeText(land.callee);
    if (name === "includes" && node.type === "StringLiteral" && node.value === "already exists") {
      return true;
    }
    if (name === "toast") return true;
    if (name === "setStatus" && filename.replaceAll("\\", "/").includes("/routes/ssh/page.tsx")) {
      return true;
    }
    if (name === "useState") return isSentenceLike(node);
    if ((name === "data" || name === "Error") && isUiFile(filename)) return true;
    return false;
  }
  if (land.type === "ReturnStatement") {
    return isReturnCandidate(node, filename);
  }
  if (land.type === "BinaryExpression" && land.operator === "+") {
    return filename.replaceAll("\\", "/").endsWith("/utils/user.ts");
  }
  if (land.type === "VariableDeclarator" && filename.replaceAll("\\", "/").endsWith(".tsx")) {
    if (node.type !== "StringLiteral" || !hasLetters(node.value)) return false;
    // A single capitalized word ("Domains") or a phrase. Camel-case callback
    // names such as "onAllReady" are not copy.
    if (node.value.includes(" ") || /^[A-Z][a-z]+$/.test(node.value)) return true;
    return false;
  }
  return false;
}

function allowsReturnCopy(filename: string): boolean {
  const file = filename.replaceAll("\\", "/");
  if (file.endsWith(".tsx")) return true;
  return (
    file.endsWith("/utils/user.ts") ||
    file.endsWith("/utils/host-info.ts") ||
    file.endsWith("/utils/time.ts")
  );
}

function isSentenceLike(node: Node): boolean {
  if (node.type === "TemplateLiteral") return true;
  if (node.type !== "StringLiteral") return false;
  return /[\s…]/.test(node.value);
}

function isReturnCandidate(node: Node, filename: string): boolean {
  if (!allowsReturnCopy(filename)) return false;
  if (node.type !== "StringLiteral" && node.type !== "TemplateLiteral") return false;
  const text =
    node.type === "StringLiteral"
      ? node.value
      : node.expressions.length === 0
        ? (node.quasis[0]?.value.cooked ?? "")
        : "";
  if (node.type === "TemplateLiteral" && node.expressions.length > 0) return true;
  if (!hasLetters(text)) return false;
  // Lowercase returns are role ids, log levels, and other tokens.
  if (text === text.toLowerCase()) return false;
  return true;
}

function expressionHasString(node: Node): boolean {
  let found = false;
  walk(
    node,
    (child) => {
      if (child !== node && (child.type === "StringLiteral" || child.type === "TemplateLiteral")) {
        found = true;
      }
    },
    null,
  );
  return found;
}

function lineOf(node: Node): number {
  return node.loc?.start.line ?? 1;
}

function pushMessage(out: Candidate[], key: string, file: string, line: number) {
  const text = normalize(key);
  if (!hasLetters(text)) return;
  out.push({ kind: "message", key: text, file, line });
}

function slotsFromTemplate(node: Node, code: string): { key: string; slots: ExprSlot[] } | null {
  if (node.type !== "TemplateLiteral" || node.expressions.length === 0) return null;
  const slots: ExprSlot[] = [];
  let key = node.quasis[0]?.value.cooked ?? "";
  node.expressions.forEach((expr, index) => {
    const source = code.slice(expr.start ?? 0, expr.end ?? 0);
    const norm = normExpr(source);
    slots.push({ norm, source });
    key += `{${norm}}`;
    key += node.quasis[index + 1]?.value.cooked ?? "";
  });
  return { key: normalize(key), slots };
}

function jsxChildrenPattern(
  children: Node[],
  code: string,
): { key: string; slots: ExprSlot[]; start: number; end: number } | null {
  if (children.length === 0) return null;
  const parts: string[] = [];
  const slots: ExprSlot[] = [];
  let sawExpr = false;
  let sawText = false;

  for (const child of children) {
    if (child.type === "JSXText") {
      if (hasLetters(child.value)) sawText = true;
      parts.push(child.value);
      continue;
    }
    if (child.type !== "JSXExpressionContainer") return null;
    const expr = child.expression;
    if (expr.type === "JSXEmptyExpression") return null;
    if (expr.type === "StringLiteral") {
      if (hasLetters(expr.value)) sawText = true;
      parts.push(expr.value);
      continue;
    }
    if (expr.type === "TemplateLiteral" && expr.expressions.length === 0) {
      const cooked = expr.quasis[0]?.value.cooked ?? "";
      if (hasLetters(cooked)) sawText = true;
      parts.push(cooked);
      continue;
    }
    if (expressionHasString(expr)) return null;
    const source = code.slice(expr.start ?? 0, expr.end ?? 0);
    const norm = normExpr(source);
    slots.push({ norm, source });
    parts.push(`{${norm}}`);
    sawExpr = true;
  }

  if (!sawExpr || !sawText) return null;
  const start = children[0]?.start;
  const end = children[children.length - 1]?.end;
  if (start == null || end == null) return null;
  return { key: normalize(parts.join("")), slots, start, end };
}

function renderTemplate(
  translation: string,
  slots: ExprSlot[],
  wrapper: "jsx" | "template",
): string | null {
  let out = "";
  const re = /\{([^{}]+)\}/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(translation))) {
    out += translation.slice(last, match.index);
    const slot = slots.find((item) => item.norm === match?.[1]);
    if (!slot) return null;
    out += wrapper === "jsx" ? `{${slot.source}}` : `\${${slot.source}}`;
    last = match.index + match[0].length;
  }
  out += translation.slice(last);
  if (wrapper === "template") return `\`${escapeTemplate(out)}\``;
  return out;
}

function escapeTemplate(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function escapeQuoted(value: string, quote: '"' | "'" | "`"): string {
  const escaped = value
    .replace(/\\/g, "\\\\")
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
  if (quote === "`") return `\`${escaped.replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\``;
  if (quote === "'") return `'${escaped.replace(/'/g, "\\'")}'`;
  return `"${escaped.replace(/"/g, '\\"')}"`;
}

function quoteOf(code: string, node: Node): '"' | "'" | "`" {
  const ch = code[node.start ?? 0];
  if (ch === "'" || ch === "`" || ch === '"') return ch;
  return '"';
}

function jsxTextSpan(code: string, node: Node, translated: string): Span | null {
  const start = node.start ?? 0;
  const end = node.end ?? 0;
  const raw = code.slice(start, end);
  const coreStart = raw.length - raw.trimStart().length;
  const coreEnd = raw.trimEnd().length;
  if (coreEnd <= coreStart) return null;
  return { start: start + coreStart, end: start + coreEnd, text: translated };
}

function localeSpans(node: Node, code: string): Span[] {
  const spans: Span[] = [];
  if (
    node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    !node.callee.computed
  ) {
    const property = node.callee.property;
    if (property.type === "Identifier" && LOCALE_METHODS.has(property.name)) {
      const first = node.arguments[0];
      if (!first) {
        const end = node.end ?? 0;
        if (code[end - 1] === ")") spans.push({ start: end - 1, end: end - 1, text: '"zh-CN"' });
      } else if (
        first.type === "StringLiteral" &&
        (first.value === "en" || first.value === "en-US")
      ) {
        spans.push({
          start: first.start ?? 0,
          end: first.end ?? 0,
          text: escapeQuoted("zh-CN", quoteOf(code, first)),
        });
      }
    }
  }
  if (node.type === "NewExpression" && node.callee.type === "MemberExpression") {
    const object = node.callee.object;
    const property = node.callee.property;
    if (
      object.type === "Identifier" &&
      object.name === "Intl" &&
      property.type === "Identifier" &&
      (property.name === "DateTimeFormat" || property.name === "RelativeTimeFormat")
    ) {
      const first = node.arguments[0];
      if (first?.type === "StringLiteral" && (first.value === "en" || first.value === "en-US")) {
        spans.push({
          start: first.start ?? 0,
          end: first.end ?? 0,
          text: escapeQuoted("zh-CN", quoteOf(code, first)),
        });
      }
    }
  }
  return spans;
}

export function parseSource(code: string, filename: string) {
  return parse(code, {
    sourceType: "module",
    sourceFilename: filename,
    plugins: ["typescript", "jsx"],
    errorRecovery: false,
  });
}

export function collectCandidates(code: string, filename: string): Candidate[] {
  const ast = parseSource(code, filename);
  const parents = new Map<Node, Node>();
  const candidates: Candidate[] = [];

  walk(
    ast,
    (node, parent) => {
      if (parent) parents.set(node, parent);
    },
    null,
  );

  const covered: Array<{ start: number; end: number }> = [];
  const insideCovered = (node: Node) => {
    const start = node.start ?? 0;
    const end = node.end ?? 0;
    return covered.some((range) => start >= range.start && end <= range.end);
  };

  walk(
    ast,
    (node) => {
      if (
        (node.type === "JSXElement" || node.type === "JSXFragment") &&
        !insideCodeTag(node, parents)
      ) {
        const pattern = jsxChildrenPattern(node.children, code);
        if (pattern && hasLetters(pattern.key)) {
          candidates.push({
            kind: "template",
            key: pattern.key,
            file: filename,
            line: lineOf(node),
          });
          covered.push({ start: pattern.start, end: pattern.end });
        }
      }

      if (insideCovered(node)) return;

      if (node.type === "JSXText") {
        if (insideCodeTag(node, parents)) return;
        pushMessage(candidates, node.value, filename, lineOf(node));
        return;
      }

      if (node.type === "StringLiteral") {
        if (!isPresentational(node, parents, filename)) return;
        pushMessage(candidates, node.value, filename, lineOf(node));
        return;
      }

      if (node.type === "TemplateLiteral") {
        if (node.expressions.length === 0) {
          if (!isPresentational(node, parents, filename)) return;
          pushMessage(candidates, node.quasis[0]?.value.cooked ?? "", filename, lineOf(node));
          return;
        }
        if (!isPresentational(node, parents, filename)) return;
        const built = slotsFromTemplate(node, code);
        if (built && hasLetters(built.key)) {
          candidates.push({ kind: "template", key: built.key, file: filename, line: lineOf(node) });
        }
      }
    },
    null,
  );

  return candidates;
}

export function translateCode(code: string, filename: string): string {
  const ast = parseSource(code, filename);
  const parents = new Map<Node, Node>();
  walk(
    ast,
    (node, parent) => {
      if (parent) parents.set(node, parent);
    },
    null,
  );

  const spans: Span[] = [];

  walk(
    ast,
    (node) => {
      spans.push(...localeSpans(node, code));

      if (
        (node.type === "JSXElement" || node.type === "JSXFragment") &&
        !insideCodeTag(node, parents)
      ) {
        const pattern = jsxChildrenPattern(node.children, code);
        const translation = pattern ? templates[pattern.key] : undefined;
        if (pattern && translation) {
          const rendered = renderTemplate(translation, pattern.slots, "jsx");
          if (rendered != null)
            spans.push({ start: pattern.start, end: pattern.end, text: rendered });
        }
      }

      if (node.type === "JSXText") {
        if (insideCodeTag(node, parents)) return;
        const key = normalize(node.value);
        const translation = messages[key];
        if (!translation || translation === key) return;
        const span = jsxTextSpan(code, node, translation);
        if (span) spans.push(span);
        return;
      }

      if (
        node.type === "StringLiteral" ||
        (node.type === "TemplateLiteral" && node.expressions.length === 0)
      ) {
        if (!isPresentational(node, parents, filename)) return;
        const raw =
          node.type === "StringLiteral" ? node.value : (node.quasis[0]?.value.cooked ?? "");
        const key = normalize(raw);
        const translation = messages[key];
        if (!translation || translation === key) return;
        const start = node.start ?? 0;
        const end = node.end ?? 0;
        spans.push({ start, end, text: escapeQuoted(translation, quoteOf(code, node)) });
        return;
      }

      if (node.type === "TemplateLiteral" && node.expressions.length > 0) {
        if (!isPresentational(node, parents, filename)) return;
        const built = slotsFromTemplate(node, code);
        const translation = built ? templates[built.key] : undefined;
        if (!built || !translation) return;
        const rendered = renderTemplate(translation, built.slots, "template");
        if (rendered == null) return;
        spans.push({ start: node.start ?? 0, end: node.end ?? 0, text: rendered });
      }
    },
    null,
  );

  return applySpans(code, spans);
}

export function applySpans(code: string, spans: Span[]): string {
  const sorted = [...spans].sort((a, b) => a.start - b.start || b.end - a.end);
  const chosen: Span[] = [];
  let cursor = -1;
  for (const span of sorted) {
    if (span.start < cursor) continue;
    if (span.start === span.end && span.text === "") continue;
    chosen.push(span);
    cursor = Math.max(cursor, span.end);
  }
  let out = code;
  for (let i = chosen.length - 1; i >= 0; i--) {
    const span = chosen[i];
    if (!span) continue;
    out = out.slice(0, span.start) + span.text + out.slice(span.end);
  }
  return out;
}
