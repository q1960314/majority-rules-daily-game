# 提交清单：Reddit Game of the Day（官方规则逐条核）
来源：https://redditgameofday2026.devpost.com/ 概览页 + /rules 规则页，2026-11-24 实读
截止：2026-12-08 18:00 PT（北京时间 2026-12-09 10:00）；评审 12-09 至 12-16；公布 12-17 左右

## 资格
- [x] 个人成年人可参加；中国不在排除名单（排除：巴西、魁北克、俄罗斯、克里米亚、古巴、伊朗、朝鲜、叙利亚、OFAC 指定国）
- [ ] 奖金支付路径（到中国账户的税务/支付方式）未证实，规则只写资格，不写支付，记为未决

## 必须交的
- [x] 游戏已建成可玩：Majority Rules，本地实测通过（见下）
- [ ] App listing 链接 developers.reddit.com/apps/majority-rules：Devvit 工程已搭好（官方 React 模板 + 游戏已移植），npm install/build 正在跑；上传须 Reddit 账号登录，待办
- [ ] Demo post 链接：测试帖子（公开子版块，成员 <200 人）运行游戏；App 不必发布，私有上传即可参赛；待上传后建帖
- [x] 文字说明：README.md 已写玩法与诚实说明
- [ ] 演示视频（可选，<1 分钟，YouTube/Vimeo/Facebook/Youku 公开链接）：待录
- [x] README.md 在仓库根目录
- [x] 公开仓库链接：https://github.com/q1960314/majority-rules-daily-game ，commit 25a75ad，全新克隆 7 个文件、语法核过
- [ ] 反馈表（可选，冲 $200 反馈奖）：待填

## 评审标准（等权重）
Delightful UX、Polish、Reddit-y、Daily Content。避开项已对过：不是 AI Slop（界面有独立身份、一屏两键）、不是直白 Reddit 主题、不属于官方点名的常见款（射击、克隆、平台跳跃、问答）。

## 本轮实测（2026-11-24）
- 30 道题，pctA 31–78，全在 0–100 内；按日期取题确定（11-24 → 第 7 题，11-25 → 第 8 题，12-08 → 第 10 题）
- 语法：app.js、dilemmas.js 均通过 node --check
- 玩法循环（Node DOM 桩实测）：点 A → 出结果（59% 对 41%）、连对 1、分 1、按钮禁用、练习模式换题，PASS
- 未做到的：本地 Chromium 因 Hatch WebGL 域策略起不来，实屏截图没拿到；改走托管版/设备浏览器验视觉，下轮补
- 仓库：已推。公开库建好（用户 Windows Chrome），MCP 建库 403 后改走接口 push-files；GitHub 上 2 个 commit（Initial 4ce808a 为系统初始化 + 快照 25a75ad），全新克隆 7 个文件、语法核过
