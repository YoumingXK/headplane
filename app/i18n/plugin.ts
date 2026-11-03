import type { Plugin } from "vite";

import { translateCode } from "./engine";

/**
 * Rewrites user-visible English in `app/` to Simplified Chinese at build time.
 * Component source stays in English, so upstream merges do not fight a
 * translated tree. Vitest loads the original modules and keeps its English
 * assertions.
 */
export function zhCNPlugin(): Plugin {
  return {
    name: "headplane:zh-cn",
    enforce: "pre",
    transform(code, id) {
      if (process.env.VITEST) return null;
      const file = id.split("?", 1)[0] ?? id;
      if (file.includes("/node_modules/")) return null;
      if (!file.includes("/app/")) return null;
      if (file.includes("/app/i18n/")) return null;
      if (!/\.[cm]?tsx?$/.test(file)) return null;

      try {
        const next = translateCode(code, file);
        if (next === code) return null;
        return { code: next, map: null };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        this.error(`zh-CN transform failed for ${file}: ${message}`);
      }
    },
  };
}
