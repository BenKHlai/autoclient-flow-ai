# AutoClient Flow AI / 智客流

香港舖頭社交內容自動生成同發佈網站（Next.js）。

- 品牌：AutoClient Flow AI　中文：智客流
- 頁面：首頁 `/`、案例 `/case`、聯絡 `/contact`
- 配色：炭黑 × 赤陶橙 × 金

## 本機

```bash
npm install
npm run dev
```

開 http://localhost:3000

## 上線（第 2 步：Vercel）

1. 用同一個 GitHub 帳號登入 https://vercel.com
2. Add New → Project → Import `BenKHlai/autoclient-flow-ai`
3. Framework：Next.js，Root Directory：`.`
4. Deploy
5. 會得到 `https://xxxxx.vercel.app`

之後買咗 GoDaddy 域名，喺 Vercel → Settings → Domains 加域名，跟指示改 DNS。

## 注意

- WhatsApp 號碼同價錢而家係佔位，改 `src/lib/site.ts`
- `public/images/` 要一併 commit，網站先有封面同案例圖
