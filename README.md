# Studio Portfolio

Modern multi-page React (Vite + TypeScript) portfolio that fuses the tone of Shoaib's SkillsRoom site with the visual aesthetic of Abuzar's portfolio. It highlights services, detailed vertical pages (Web Dev, Leads Gen, Google Ads), and a contact flow backed by a Node/Express SMTP bridge.

## Stack

- Vite + React 19 + TypeScript
- React Router v7
- Custom CSS (no Tailwind/SCSS)
- Node/Express contact API with Nodemailer (Google SMTP)

## Getting Started

```bash
npm install
```

### Run the frontend

```bash
npm run dev   # http://localhost:5173
```

### Contact API

```bash
npm run server  # http://localhost:4000/api/contact
```

Create a `.env` (copy from `.env.example`):

```
PORT=4000
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_app_password
CONTACT_RECIPIENT=client_notifications@example.com
ALLOWED_ORIGINS=http://localhost:5173,https://shoaimstudio.com
```

### Production build

```bash
npm run build   # outputs to dist/
```

Use `npm run preview` to test the bundle locally.

## Project Structure

```
src/
  components/
    cards/…          # Service/project cards
    common/…         # Section headings, stats, hero, etc.
    forms/ContactForm.tsx
    layout/…         # Navbar + Footer
  data/content.ts    # Centralized copy + projects
  pages/
    Home.tsx         # Lazy loads lower sections
    Services.tsx
    WebPortfolio.tsx
    LeadsPortfolio.tsx
    AdsPortfolio.tsx
    Contact.tsx
  styles/global.css
```

## Performance & SEO Notes

- Critical meta tags (description, OG/Twitter, canonical) are in `index.html`.
- Fonts are preloaded via `<link rel="preload">`.
- Lower sections on the home page use `React.lazy` to defer rendering.
- Contact form select arrow + focus states handled via CSS to keep accessibility high.

## Deployment Tips

1. Upgrade Node to 22.12+ (or 20.19+) as required by Vite 7.
2. Serve the built `dist/` directory via your host (Vercel, Netlify, static bucket, etc.).
3. Deploy the Express server alongside the frontend or as a serverless function. Ensure `CONTACT_RECIPIENT`, `SMTP_USER`, and `SMTP_PASS` are set in the hosting environment.

## Roadmap Ideas

- Swap static spotlight data with CMS/API (Sanity, Payload).
- Add analytics (Plausible, PostHog) for conversion tracking.
- Integrate image optimization (responsive sources) if/when screenshots get added.

--- 
Need help extending the site (e.g., new case studies or CMS integration)? Ping https://www.linkedin.com/in/muhammad-abuzar-iftikhar-714202299/.

