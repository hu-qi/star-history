<div align="center">

# :sparkles: Star History :sparkles:

[**gstar.huqi.host**](https://gstar.huqi.host), **the missing GitCode star history graph of GitCode repos.**

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date" />
  <img alt="Star History Chart" src="https://gstar.huqi.host/svg?repos=huqi/star-history&type=Date" />
</picture>

👆 **THIS** is a **`live`** chart created with the following html: 👇

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

## 🎁 Sponsors

### GitCode

[GitCode](https://gitcode.com?utm_source=star-history) is an open-source platform for building LLM apps, from agents to AI workflows.

<a href="https://gitcode.com?utm_source=star-history"><img src="https://raw.gitcode.com/huqi/star-history/raw/main/frontend%2Fpublic%2Fassets%2Fsponsors%2Fgitcode%2Flanding.webp" /></a>

### Huawei Developer Space

[Huawei Developer Space](https://devstation.connect.huaweicloud.com/devdesktop/h5?utm_source=techcircledspace&utm_adplace=hcdggzhq) - One as All, All as One. Unified technologies. Free resources. Complete AI development—from code to deployment.

<a href="https://devstation.connect.huaweicloud.com/devdesktop/h5?utm_source=techcircledspace&utm_adplace=hcdggzhq"><img src="https://raw.gitcode.com/huqi/star-history/raw/main/frontend%2Fpublic%2Fassets%2Fsponsors%2Fspace%2Flanding.webp" /></a>

### OpenSource Bazaar

[OpenSource Bazaar](https://bazaar.fcc-cd.dev/?utm_source=star-history) - Where Ideas Flow Freely. Everyone Does a Little, Together We Change Much.

<a href="https://bazaar.fcc-cd.dev/?utm_source=star-history"><img src="https://raw.gitcode.com/huqi/star-history/raw/main/frontend%2Fpublic%2Fassets%2Fsponsors%2Fbazaar%2Flanding.webp" /></a>

## ✨ Features

- **Unique** **`sketch xkcd`** feeling **chart**;
- **One-click** generation of **high-quality** image for chart;
- Support **multiple chart view** mode **`based on date or timeline`**;
- **Embed** the **real-time chart** into **`GitHub readme or other websites`** **(like the one we embed here on the top)**
- And **various** useful **functions**:
  - toggle **repo visibility**;
  - **shortcut** to input repo;
  - **share** on **`Twitter`** **quickly**;
  - **support** input **multiple repos**;
  - ...waiting **for you** to **find out!**

## 🌠 Screenshots

<a href="https://gstar.huqi.host"><img width="800px" src="https://raw.gitcode.com/huqi/star-history/raw/main/frontend%2Fpublic%2Fassets%2FScreenshots.gif" />
</a>

## 🐳 Docker Deployment

You can deploy the entire stack (frontend + backend) using Docker.

1. Build the image:

   ```bash
   docker build -t star-history .
   ```

2. Run the container:

   **Basic run:**

   ```bash
   docker run -p 3000:3000 -p 8080:8080 star-history
   ```

   **Run with environment variables:**

   ```bash
   docker run -d \
     -p 3000:3000 \
     -p 8080:8080 \
     -e NEXT_PUBLIC_GITCODE_ACCESS_TOKEN=your_gitcode_token_here \
     --name star-history-app \
     --restart unless-stopped \
     star-history
   ```

   **Or use environment file:**

   ```bash
   docker run -d \
     -p 3000:3000 \
     -p 8080:8080 \
     --env-file /root/.env.star-hitstory \
     --name star-history-app \
     --restart unless-stopped \
     star-history
   ```

   The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8080`.

   **Required Environment Variables:**

   - `NEXT_PUBLIC_GITCODE_ACCESS_TOKEN` - GitCode access token(s) for backend API access. For multiple tokens, pass them newline-separated (e.g. `NEXT_PUBLIC_GITCODE_ACCESS_TOKEN=$'tok1\ntok2'`) or via an env file with one token per line.
   - `NEXT_PUBLIC_SITE_URL` *(optional)* - Public site URL used to build absolute links in SSR (e.g. sitemap/embed links).

## 🏗 Development

**`Star-history`** is built using a **modern tech stack**: **`Next.js`** + **`TailwindCSS`**.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/)

### Homepage

**Homepage** of star-history with most of useful features and blogs about open source.

```shell
cd frontend && pnpm i && pnpm dev
```

The website will be served at http://localhost:3000.

### API Server

**API server** is an **`experimental feature`**. It's mainly used to **generate chart `SVG`** image file that can be embeded into **`GitHub readme`**.

```shell
cd backend && pnpm i && pnpm dev
```

The API server will be running on http://localhost:8080.
