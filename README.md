# Alluring Spaces

Alluring Spaces is a portfolio website for an interior design studio. It presents the studio, its projects, and its services, with a contact form for enquiries. The site is built with Next.js and React, and can use Sanity to manage selected content.

## Pages

- `/` — Homepage
- `/projects` — Project portfolio
- `/projects/[slug]` — Individual project pages
- `/about` — Studio information
- `/blog` — Articles
- `/contact` — Contact form
- `/studio` — Sanity Studio for content management

## Requirements

- Node.js compatible with Next.js 16
- npm

## Run Locally

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site uses local fallback content when Sanity is not configured.

## Sanity Configuration

Sanity is optional for running the site, but is needed to manage content in the Studio. Copy `.env.example` to `.env.local` and replace the example values with your Sanity project details:

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` for site content. The Studio can use the same values, or its own values via `NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID` and `NEXT_PUBLIC_SANITY_STUDIO_DATASET`. `NEXT_PUBLIC_SANITY_API_VERSION` selects the Sanity API version.

Run the development server and visit `/studio` to open Sanity Studio. In the Studio, create one `Environment` document and one `Socials` document:

- `Environment` stores completed spaces, design awards, trusted artisans, cities served, and the WhatsApp number. Use an international number without a `+`, spaces, or dashes; for example, `2348012345678`.
- `Socials` stores the TikTok, Instagram, and Facebook URLs shown in the footer.

Until the project ID, dataset, and documents are configured, the site uses local defaults.

## Production

Build the site:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```