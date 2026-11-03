# 简体中文界面

Headplane 的界面文案在开发和构建时译成简体中文。组件源码仍是英文，因此把上游新版本合并进来时，冲突集中在词典和插件，而不是每一个页面。

## 翻译放在哪里

- `app/i18n/zh-CN.ts`：英文原文到简体中文的对照。`messages` 是整句，`templates` 是带 `{表达式}` 占位符的句子（占位符与源码里的表达式一致，顺序可以调整）。`intentionalEnglish` 是有意保留的英文。
- `app/i18n/engine.ts`：识别按钮、标题、表单、提示、对话框和返回给界面的错误信息，并按词典替换。日期和相对时间的区域设置写成 `zh-CN`。
- `app/i18n/plugin.ts`：Vite 插件，在 `pnpm dev` 和 `pnpm run build` 时改写 `app/` 里的文案。Vitest 不启用它，现有测试仍对照英文源码。
- `app/root.tsx` 的 `<html lang>` 为 `zh-CN`。

产品名 Headplane、Headscale、Tailscale 保持原样。Magic DNS / MagicDNS、DNS、SSH 等协议名，命令行、配置键、示例 IP、示例标签（如 `tag:example`）和表单字段名也不翻译。

## 合并上游新版本

1. 加上游远程并取出目标标签（当前部署基线是 `v0.8.2`）：

   ```sh
   git remote add upstream https://github.com/tale/headplane
   git fetch upstream tag vX.Y.Z
   ```

2. 把该标签合并或变基到 `zh-cn-v0.8.2`（或按新版本新建分支）。源码里的英文句子一般不会冲突；`vite.config.ts`、`app/root.tsx` 和 `app/i18n/` 如果和上游改动撞在一起，保留插件注册和 `lang="zh-CN"`。

3. 查出还没翻译的界面文字：

   ```sh
   pnpm exec tsx scripts/zh-cn-untranslated.ts
   ```

   把新句子补进 `app/i18n/zh-CN.ts`。应当继续保持英文的，放进 `intentionalEnglish`。脚本没有输出时，界面文案是齐的。`pnpm test:unit` 里的 `zh-CN UI copy` 会做同样的检查。

4. 用 `./build.sh --app` 确认应用能构建。登录页和几个主要页面应显示中文。
