# Service Business Template

A premium, mobile-first local service business website template built in Next.js and seeded with **Summit Auto Care**, a sample auto repair shop.

The homepage is designed to generate calls and quote requests first. All core business details, services, reviews, colors, and CTA text live in a reusable config file so you can adapt the site to another local business quickly.

## What Is Included

- Next.js App Router setup
- Premium service-business homepage optimized for mobile conversion
- Reusable content config in `src/lib/site-content.ts`
- Local SEO metadata and JSON-LD structured data
- Sticky mobile CTA bar
- Quote request form UI that opens the visitor's email client with prefilled details
- GitHub-ready and Vercel-friendly structure

## Project Structure

- `src/app/layout.tsx` global metadata, fonts, and layout shell
- `src/app/page.tsx` homepage assembly and local business schema
- `src/app/globals.css` premium visual system and responsive styling
- `src/lib/site-content.ts` business content, services, proof, reviews, FAQ, and theme tokens
- `src/components/site/*` reusable homepage components

## Local Development

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Open:
   `http://localhost:3000`

## Customize The Template

Edit `src/lib/site-content.ts` to change:

- business name
- city and state
- phone and email
- address and hours
- service areas
- service cards
- reviews and rating
- CTA text
- theme colors
- SEO title, description, and keywords

The homepage components read from that file, so most local-business customizations do not require layout changes.

## Exact GitHub To Vercel Deployment Steps

1. Create a new GitHub repository or use this one.
2. Make sure all project files are committed, including `package-lock.json` after install.
3. Push the repo to GitHub:
   `git add .`
   `git commit -m "Build Summit Auto Care Next.js website template"`
   `git push origin main`
4. Log in to Vercel.
5. Click **Add New Project**.
6. Import the GitHub repository.
7. Vercel should detect **Next.js** automatically.
8. Leave the default project settings unless you have a custom reason to change them.
9. Click **Deploy**.
10. After the first deploy, add your production domain in Vercel project settings.

## Build Settings For Vercel

Use the defaults:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave blank

## Environment Variables

No environment variables are required for the included static template.

If you later connect the quote form to a CRM, email service, or API route, add those variables in both local development and Vercel project settings.

## Recommended Verification

1. `npm install`
2. `npm run typecheck`
3. `npm run build`
4. Test the homepage at mobile width.
5. Test the tap-to-call button.
6. Test the quote request form.
7. Confirm the page title and description match your business.
8. Confirm `.env` is not committed.

## Notes

- This starter is intentionally lightweight so it deploys cleanly on Vercel.
- The quote form is front-end only by default and opens the visitor's email client with their details prefilled.
- For a production lead pipeline, replace that form behavior with your preferred backend or form service.
