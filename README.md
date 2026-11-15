# Webro Studios

Website for **Webro Studios** — a student-led product & web development studio from Dibrugarh, Assam.

Built with TanStack Start (React 19), Tailwind CSS v4 and TypeScript.

## Development

You need Node.js 20+.

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build into .output/
npm test
```

## Editing content

All site copy lives in [`src/data/content.ts`](src/data/content.ts): contact details, projects (with live URLs), pricing, FAQs, team and blog posts.

- **Project screenshots** live in `public/projects/` as `<shot>.webp` (desktop) and `<shot>-mobile.webp`.
- **Contact form** posts to the `formEndpoint` in `content.ts` (FormSubmit). The first message sends a one-time
  activation email to that inbox — click the link in it and every later message arrives normally.
- **Team / testimonials** entries that start with `[` are treated as placeholders and hidden until you fill them in.

## Deploying

`npm run build` auto-detects Vercel, Netlify and Cloudflare. Anywhere else, run the Node server it outputs:

```sh
node .output/server/index.mjs
```
