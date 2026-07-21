# 404NotFound 网站维护约定（项目内追加式记录）

> 本文件**只追加、不修改**。每次全站性新约定以带日期的小节追加到文件末尾。
> 与 `mkdocs-site-manager` skill 配合使用；冲突时以较新的约定为准。

## 2026-07-21 · 全站自动化功能与更新默认动作

1. **页面日期**：所有非主页页面底部自动显示"最后更新 + 创建日期"（`mkdocs-git-revision-date-localized` 插件，日期取自 git 历史）。新文章不要手写日期。依赖：`ci.yml` 的 `fetch-depth: 0` 与 pip 安装该插件，必须保留。
2. **留言板**：`docs/javascripts/extra.js` 自动给所有非首页注入 giscus 留言板（含"留言板"标题）。不要在 md 文件里内嵌 giscus 脚本。
3. **阅读统计**：每页标题（h1）下方自动注入"约 N 个字 / N 行代码 / N 张图片 / 预计阅读时间 N 分钟"，随内容修改自动变化，无需手工维护。
4. **更新日志（每次更新必做）**：每次修改网站内容后，在 `docs/about.md` 的 `.update-log-list` **顶部**插入一张 `.update-log-card` 卡片（日期 + 内容简述）。折叠交互自动处理，默认显示最新 3 条。
5. **版本可恢复**：main 分支完整历史即子版本保障，禁止 force-push / 改写已推送历史；恢复旧版本用 `git revert` 或 `git checkout <commit> -- <文件>`。
6. 构建命令：`"C:\Python314\python.exe" -m mkdocs build --strict`（用户 Python 已装日期插件）。
