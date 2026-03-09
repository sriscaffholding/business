# Sri Vari Scaffolding Works – Website

A production-ready business website for **Sri Vari Scaffolding Works** built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## 🚀 Features

- **Industrial-themed UI** with dark yellow/amber, black, white palette
- **Home Gallery** with filter by scaffolding type + image modal preview
- **Loading skeletons** while images load
- **Admin Panel** at `/myAdminContent` (password: `Hari@1234`)
  - Upload new items (image + type + description)
  - Edit description & type
  - Delete items
- **Contact Page** with WhatsApp, call, and email links
- **Full SEO** – meta tags, OG tags, JSON-LD structured data, sitemap, robots.txt
- **Google Analytics 4** ready via environment variable
- **Mobile responsive** design

---

## 📁 Project Structure

```
sri-vari-scaffolding/
├── app/
│   ├── layout.tsx          # Root layout with SEO & GA
│   ├── page.tsx            # Home page with Hero + Gallery
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── myAdminContent/
│   │   └── page.tsx        # Admin panel (password protected)
│   └── api/
│       ├── items/
│       │   ├── route.ts    # GET all items
│       │   └── [id]/
│       │       └── route.ts # PATCH + DELETE item
│       └── upload/
│           └── route.ts    # POST – upload image + metadata
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── GalleryGrid.tsx     # Client gallery with filters & modal
│   ├── ImageModal.tsx      # Full-screen image preview
│   └── SkeletonCard.tsx    # Loading skeleton
├── lib/
│   └── db.ts               # JSON file-based storage
├── types/
│   └── index.ts            # TypeScript types & constants
├── data/
│   └── items.json          # Gallery data (auto-managed)
└── public/
    └── uploads/            # Uploaded images stored here
```

---

## 🛠 Local Development

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/sri-vari-scaffolding.git
cd sri-vari-scaffolding
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX   # optional for dev
```

### 3. Run Development Server

```bash
npm run dev
```

Visit:
- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/myAdminContent (password: `Hari@1234`)
- **Contact Page**: http://localhost:3000/contact

### 4. Production Build

```bash
npm run build
npm run start
```

---

## 🐙 GitHub Repository Setup

```bash
# Initialize git
git init
git add .
git commit -m "feat: initial production website for Sri Vari Scaffolding Works"

# Create repo on GitHub (or use GitHub CLI)
gh repo create sri-vari-scaffolding --public --push --source=.

# OR manually:
git remote add origin https://github.com/YOUR_USERNAME/sri-vari-scaffolding.git
git branch -M main
git push -u origin main
```

---

## ▲ Vercel Deployment

### Option A – Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Set **Framework Preset** to `Next.js`
5. Add **Environment Variables**:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` *(your GA4 ID)* |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | *(optional)* |

6. Click **Deploy**

### Option B – Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### ⚠️ Important Note About Vercel

Vercel uses a **serverless/read-only filesystem** after build.  
This means:
- **Image uploads** will NOT persist between deployments or server restarts on Vercel.
- **JSON data file** changes will NOT persist.

**Solutions for production persistence on Vercel:**

#### Option 1 – Vercel Blob (Easiest)
```bash
npm install @vercel/blob
```
Replace `writeFile` in `app/api/upload/route.ts` with `put()` from `@vercel/blob`.

#### Option 2 – PlanetScale / Supabase
Replace `lib/db.ts` with a database client.

#### Option 3 – Self-Host (Recommended for simplicity)
Deploy on a VPS (DigitalOcean, Railway, Render) where the filesystem IS writable.

```bash
# On Railway / Render – works out of the box
# Set start command to:
npm run build && npm run start
```

---

## 🔍 SEO Optimization

The site includes:
- **Title tags** + meta descriptions per page
- **Open Graph** tags for social sharing
- **JSON-LD** structured data (LocalBusiness schema)
- **Sitemap** at `/sitemap.xml`
- **Robots.txt** at `/robots.txt`
- **Google Analytics 4** via environment variable
- **Google Search Console** verification support

### After Deployment:
1. Add your site to [Google Search Console](https://search.google.com/search-console)
2. Submit sitemap: `https://your-domain.com/sitemap.xml`
3. Set up [Google Analytics 4](https://analytics.google.com) and add `NEXT_PUBLIC_GA_ID`
4. Verify with Google Search Console and add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

---

## ✏️ Customization

### Update Address
Edit the address placeholder in:
- `app/page.tsx` (bottom of homepage)
- `app/contact/page.tsx`

Search for `[Door Number]` and replace with your real address.

### Change Admin Password
Edit `app/myAdminContent/page.tsx`:
```ts
const ADMIN_PASSWORD = 'Hari@1234'; // Change this
```

### Update Domain in SEO
Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (local) and Vercel environment variables (production).

---

## 📞 Business Info

| | |
|---|---|
| **Business** | Sri Vari Scaffolding Works |
| **Founder** | Saravanan |
| **Phone 1** | +91 86819 95581 |
| **Phone 2** | +91 98404 81409 |
| **WhatsApp** | https://wa.me/918681995581 |
| **Email** | sriscaffholding@gmail.com |

---

## 📄 License

Private – All rights reserved © Sri Vari Scaffolding Works
