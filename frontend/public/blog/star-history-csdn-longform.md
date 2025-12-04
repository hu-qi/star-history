> 想把开源项目的“增长故事”讲清楚，让数据自己开口说话。[Star History](https://gitcode.com/huqi/star-history) 为 GitCode 仓库生成手绘风、实时更新的星标趋势图，可一键导出高清图或直接嵌入 README/博客/官网。

在线体验：[`https://gstar.huqi.host`](https://gstar.huqi.host)

---

## 先看效果

- 动图演示：  
  ![https://gstar.huqi.host](/assets/Screenshots.gif)
- 深色/浅色实时图：  
  深色
  ![https://gstar.huqi.host](https://gstar.huqi.host/svg?repos=cann/ops-cv,cann/ops-math,cann/ops-nn&type=date&theme=dark&legend=top-left)

    浅色
    ![https://gstar.huqi.host](https://gstar.huqi.host/svg?repos=cann/ops-cv,cann/ops-math,cann/ops-nn&type=date&legend=top-left)

---

## Star History 是什么？

- GitCode 仓库的星标趋势图生成器，xkcd 手绘风、实时刷新。
- 支持多仓对比、按日期/时间线切换，讲清增长节奏。
- 一键导出高清图，或复制 `<picture>` 代码嵌入 README/博客。
- 开源（Next.js + TailwindCSS），可自部署、可二次开发。

---

## 30 秒在线上手

1. 打开 `https://gstar.huqi.host`
2. 输入仓库：`owner/repo`，想对比就多填几个。
3. 选择模式：Date（按日期）或 Timeline（按时间线）。
4. 点击分享：导出图片，或复制嵌入代码。

嵌入 README/博客的示例代码：

```html
## Star History

<a href="https://gstar.huqi.host/#cann/ops-cv&cann/ops-math&cann/ops-nn&type=date&legend=top-left">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://gstar.huqi.host/svg?repos=cann/ops-cv,cann/ops-math,cann/ops-nn&type=date&theme=dark&legend=top-left" />
        <source media="(prefers-color-scheme: light)" srcset="https://gstar.huqi.host/svg?repos=cann/ops-cv,cann/ops-math,cann/ops-nn&type=date&legend=top-left" />
        <img alt="Star History Chart" src="https://gstar.huqi.host/svg?repos=cann/ops-cv,cann/ops-math,cann/ops-nn&type=date&legend=top-left" />
    </picture>
</a>
```

---

## Docker 一键部署（前后端全栈）

```bash
docker build -t star-history .
docker run -p 3000:3000 -p 8080:8080 star-history

# 带环境变量
docker run -d \
  -p 3000:3000 \
  -p 8080:8080 \
  -e NEXT_PUBLIC_GITCODE_ACCESS_TOKEN=your_gitcode_token_here \
  --name star-history-app \
  --restart unless-stopped \
  star-history

# 或使用 env 文件
docker run -d \
  -p 3000:3000 \
  -p 8080:8080 \
  --env-file /root/.env.star-hitstory \
  --name star-history-app \
  --restart unless-stopped \
  star-history
```

- 前端：`http://localhost:3000`
- 后端：`http://localhost:8080`
- 必需环境变量：`NEXT_PUBLIC_GITCODE_ACCESS_TOKEN`（多 Token 每行一个，供后端访问 GitCode API）

---

## 本地开发（想改风格/加功能）

```bash
# 前端
cd frontend && pnpm i && pnpm dev
# 后端
cd backend && pnpm i && pnpm dev
```

- 前端：`http://localhost:3000`
- 后端：`http://localhost:8080`
- 样式基于 TailwindCSS，想改配色/字体/线条粗细都很方便。

---

## 高阶玩法

- 多仓对比：在 Timeline 模式下看不同仓库的增长节奏，写竞品/行业分析更有说服力。
- 实时嵌入：用 `<picture>` 代码放到 CSDN、GitHub README、个人主页，读者每次打开都是最新数据。
- 社媒传播：导出图片后一键分享到 Twitter/X，跨平台扩散。
- 二次开发：想加品牌色/改背景/改线条风格，直接改 Tailwind 样式即可。

---

## 适用场景

- 开源作者晒成绩单：周报、里程碑、融资/合作汇报。
- 技术博客数据支撑：写“一个月拿下 1k Star”的实践贴，用曲线证明。
- 团队/社群复盘：多个仓库对比，找到带来增长的关键改动。
- 运营/市场：在宣发稿里嵌入实时曲线，提升信任度。

---

## 常见问题

- 支持哪些仓库？GitCode 仓库，输入 `owner/repo` 即可。
- 会自动更新吗？是的，实时请求最新数据，嵌入后无需手动刷新。
- 风格能改吗？开源，可自行改样式或二开。
- 要登录吗？在线使用无需登录；自部署后用环境变量配置 Token。

---

## 结尾

- 在线体验：[`https://gstar.huqi.host`](%60https://gstar.huqi.host%60)
- 开源代码与 README：项目根目录已包含详细说明，欢迎 Fork、提 Issue、点 Star。
- 写“如何把开源做成增长飞轮”时，用 Star History 的实时手绘曲线，让数据替你讲故事。

## 源码

[https://gitcode.com/huqi/star-history](https://gitcode.com/huqi/star-history)

欢迎各位老板 Fork、提 Issue、点 Star!
