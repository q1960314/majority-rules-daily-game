# 上传 runbook：Majority Rules → Devvit → 测试帖子 → Devpost 提交
截止：2026-12-08 18:00 PT（北京时间 2026-12-09 10:00）

## 前置（已做完）
- 游戏已移植进 Devvit 工程（官方 React 模板），类型检查、构建、lint 三项退出码全为 0。
- 仓库 https://github.com/q1960314/majority-rules-daily-game ，commit daae7f0，全新克隆核过。
- App 名：majority-rules。入口：splash（inline）+ game（expanded）。

## 第一步：登录（须 Reddit 账号）
- 本机：`cd ~/workspace/reddit-daily-game/devvit && npx devvit login`
- 登录走 Reddit OAuth，浏览器完成授权后 CLI 拿到 token。
- 用户没有 Reddit 账号记录在案；若无号，须先在 reddit.com 注册一个（用户本人操作）。

## 第二步：上传（不发布）
- `npx devvit upload`
- 上传成功后 App 出现在 developers.reddit.com/apps/majority-rules。
- 参赛不要求发布，私有上传即符合资格。

## 第三步：测试帖子
- 在 developers.reddit.com 建一个测试子版块（公开，成员 <200 人），或用已有小版块。
- 用 App 的 "Create a new post" 菜单项发帖，帖子须能打开游戏、能玩一局。
- 核验：点开帖子 → splash 显示今日题 → 点 Tap to Play → 选一边 → 出结果条与连对。

## 第四步：Devpost 提交
- 登录 Devpost 账号 lymmwang（已有）。
- 填：App listing 链接、Demo post 链接、文字说明、README（仓库根目录已有）。
- 演示视频可选（<1 分钟），有则附 YouTube/Vimeo/Facebook/Youku 公开链接。
- 提交后记下提交编号与回执页，写回 SUBMIT-CHECKLIST.md，任务才算落地。
