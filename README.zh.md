<div align="center">

# :sparkles: Star History :sparkles:

[**gstar.huqi.host**](https://gstar.huqi.host)，**GitCode 缺失的 star 历史趋势图。**

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date" />
  <img alt="Star History Chart" src="https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date" />
</picture>

👆 **这** 是一个 **`实时`** 图表，由以下 html 创建：👇

<div align="left">

```html
<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="
      https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date&theme=dark
    "
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date"
  />
  <img
    alt="Star History Chart"
    src="https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date"
  />
</picture>
```

</div>

</div>

---

## 🎁 赞助商

### GitCode

[GitCode](https://gitcode.com?utm_source=star-history) 是一个构建 LLM 应用的开源平台，从 Agent 到 AI 工作流。

<a href="https://gitcode.com?utm_source=star-history"><img src="https://raw.gitcode.com/huqi/star-history/raw/main/frontend%2Fpublic%2Fassets%2Fsponsors%2Fgitcode%2Flanding.webp" /></a>

### Huawei Developer Space

[Huawei Developer Space](https://devstation.connect.huaweicloud.com/devdesktop/h5?utm_source=techcircledspace&utm_adplace=hcdggzhq) - 华为开发者空间（Huawei Developer Space），开发者专属的云上成长空间，汇聚昇腾、鸿蒙、鲲鹏等华为根技术，为开发者提供免费算力资源，整合云上 AI 开发工具链及配套技术案例，帮助开发者在 AI 时代下快速开发编码到应用调测，打造开发者智能 AI 应用开发平台。

<a href="https://devstation.connect.huaweicloud.com/devdesktop/h5?utm_source=techcircledspace&utm_adplace=hcdggzhq"><img src="https://raw.gitcode.com/huqi/star-history/raw/main/frontend%2Fpublic%2Fassets%2Fsponsors%2Fspace%2Flanding.webp" /></a>

### OpenSource Bazaar

[OpenSource Bazaar](https://bazaar.fcc-cd.dev/?utm_source=star-history) - 创意自由流动的地方。人人为我，我为人人。

<a href="https://bazaar.fcc-cd.dev/?utm_source=star-history"><img src="https://raw.gitcode.com/huqi/star-history/raw/main/frontend%2Fpublic%2Fassets%2Fsponsors%2Fbazaar%2Flanding.webp" /></a>

## ✨ 特性

- **独特** 的 **`sketch xkcd`** 手绘风格 **图表**；
- **一键** 生成 **高质量** 图表图片；
- 支持 **多种图表查看** 模式 **`基于日期或时间线`**；
- **嵌入** **实时图表** 到 **`GitHub readme 或其他网站`** **（就像我们在上面嵌入的那样）**
- 以及 **各种** 实用 **功能**：
  - 切换 **仓库可见性**；
  - **快捷方式** 输入仓库；
  - **快速** **分享** 到 **`Twitter`**；
  - **支持** 输入 **多个仓库**；
  - ...等待 **你** 来 **发现！**

## 🌠 截图

<a href="https://gstar.huqi.host"><img width="800px" src="https://raw.gitcode.com/huqi/star-history/raw/main/frontend%2Fpublic%2Fassets%2FScreenshots.gif" />
</a>

## 🐳 Docker 部署

你可以使用 Docker 部署整个技术栈（前端 + 后端）。

1. 构建镜像：

   ```bash
   docker build -t star-history .
   ```

2. 运行容器：

   **基本运行：**

   ```bash
   docker run -p 3000:3000 -p 8080:8080 star-history
   ```

   **带环境变量运行：**

   ```bash
   docker run -d \
     -p 3000:3000 \
     -p 8080:8080 \
     -e NEXT_PUBLIC_GITCODE_ACCESS_TOKEN=your_gitcode_token_here \
     --name star-history-app \
     --restart unless-stopped \
     star-history
   ```

   **或使用环境文件：**

   ```bash
   docker run -d \
     -p 3000:3000 \
     -p 8080:8080 \
     --env-file /root/.env.star-hitstory \
     --name star-history-app \
     --restart unless-stopped \
     star-history
   ```

   前端访问地址：`http://localhost:3000`，后端访问地址：`http://localhost:8080`。

   **必需的环境变量：**

   - `NEXT_PUBLIC_GITCODE_ACCESS_TOKEN` - 用于后端 API 访问的 GitCode 访问令牌（如果有多个令牌，每行一个）

## 🏗 开发

**`Star-history`** 使用 **现代技术栈** 构建：**`Next.js`** + **`TailwindCSS`**。

### 前置要求

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/)

### 主页

Star-history **主页**，包含大多数实用功能和关于开源的博客。

```shell
cd frontend && pnpm i && pnpm dev
```

网站将运行在 http://localhost:3000。

### API 服务器

**API 服务器** 是一个 **`实验性功能`**。主要用于 **生成图表 `SVG`** 图片文件，可以嵌入到 **`GitHub readme`** 中。

```shell
cd backend && pnpm i && pnpm dev
```

API 服务器将运行在 http://localhost:8080。
