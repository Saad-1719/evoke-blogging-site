# Evoke — Personal Blogging Site

**Evoke** is a personal blogging site built by [Saad](https://www.saaadi.site/), a Software Engineering student and hobby blogger based in Pakistan. The site is a space for introspection, storytelling, and connection — featuring stories, insights, and personal reflections on a variety of topics.

🌐 **Live site:** [evoke-blog.netlify.app](https://evoke-blog.netlify.app/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL (`pg`) |
| Animations | Framer Motion, AOS |
| Validation | Zod |
| Notifications | React Toastify |
| Image hosting | Cloudinary, Unsplash, imghippo |
| Deployment | Netlify |

---

## Features

- **Home page** — Hero section with the latest blog posts sorted by date
- **Blog listing** — Full grid of all published posts (`/blog`)
- **Blog post pages** — Dynamic individual post pages with rich content (`/blog/[slug]`)
- **Comment section** — Readers can leave comments on each post
- **Newsletter subscription** — Email subscription form in the footer
- **About Me page** — Author bio and links (`/aboutme`)
- **SEO** — Open Graph meta tags, Google site verification, and `next-sitemap` integration
- **Responsive design** — Mobile-first layout with Tailwind CSS

---

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout (Navbar, Newsletter, Footer)
│   ├── blog/
│   │   ├── page.tsx          # Blog listing page
│   │   └── [slug]/page.tsx   # Individual blog post page
│   ├── aboutme/page.tsx      # About Me page
│   └── api/
│       ├── getBlogs/         # GET /api/getBlogs
│       ├── comments/[blogId]/# GET/POST /api/comments/:blogId
│       └── subscribe/        # POST /api/subscribe
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Banner.tsx
│   ├── LatestBlogs.tsx
│   ├── CommentSection.tsx
│   ├── Newsletter.tsx
│   └── home/
│       ├── Hero.tsx
│       └── LayoutWrapper.tsx
└── lib/
    └── db.ts                 # PostgreSQL connection pool
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A PostgreSQL database with a `Blog` table

### 1. Clone the repository

```bash
git clone https://github.com/Saad-1719/evoke-blogging-site.git
cd evoke-blogging-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
# Public base URL used for internal API calls
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

# PostgreSQL connection
PG_HOST=your_db_host
PG_USER=your_db_user
PG_PASSWORD=your_db_password
PG_DATABASE=your_db_name
PG_PORT=5432
PG_SSL=false   # set to "true" in production
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run clear-cache` | Delete the `.next` build cache |

---

## API Routes

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/getBlogs` | Fetch all blog posts from the database |
| `GET` | `/api/comments/[blogId]` | Fetch comments for a blog post |
| `POST` | `/api/comments/[blogId]` | Submit a comment on a blog post |
| `POST` | `/api/subscribe` | Subscribe to the newsletter |

---

## Deployment

The site is deployed on **Netlify**. To deploy your own instance:

1. Push the repository to GitHub.
2. Connect the repo to [Netlify](https://netlify.com).
3. Set all environment variables from the [Configuration](#3-configure-environment-variables) section in the Netlify dashboard under **Site settings → Environment variables**.
4. Netlify will automatically build and deploy on every push to the main branch.

---

## License

This project is personal and not licensed for redistribution. All content belongs to the author.
