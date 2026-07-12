# YardConnect Party

A professional event website for the YardConnect Party, built with Next.js and powered by Sanity as the content management system. The site tells the story of the party, shows the energy through imagery, and invites people to join every year.

The design is image and video first with a refined black and white palette, so the photography carries the color and energy.

## Media

Curated party photography and a looping hero video live in `public/media` and act as the default content. Anything you upload in the Studio, along with the hero and aftermovie video links, replaces these automatically.

## Pages

- **Home** opens with a full screen party video, then a large photo gallery, an aftermovie you can play, a live countdown, and short highlights.
- **About** shares the story and the values behind the party.
- **History** walks through the journey year by year on a timeline.
- **Contact** offers contact details and a working message form.
- **Studio** is the embedded Sanity content editor at `/studio`.

## Tech stack

- Next.js with the App Router and TypeScript
- Tailwind CSS for styling
- Sanity for content, embedded at `/studio`

## Getting started

Install dependencies and run the development server.

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site. It runs immediately with curated placeholder content so you can preview the full design before connecting a Sanity project.

## Connecting Sanity

1. Create a free project at https://www.sanity.io/manage and note the project id.
2. Copy the example environment file and fill in your values.

   ```bash
   cp .env.local.example .env.local
   ```

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
   ```

3. Restart the dev server, then open http://localhost:3000/studio to add content.

Once a project id is set, every page pulls its content from Sanity. Without it, the curated placeholder content is shown so the site never looks empty.

## Editing content

Open `/studio` and edit these documents:

- **Home Pages** for the hero, stats, highlights, and gallery.
- **About Pages** for the story and values.
- **History Pages** for the timeline of past editions.
- **Contact Pages** for contact details and the form note.
- **Site Settings** for the event name, the active page for each section, the tagline, next event date, contact details, and social links.

Every page is a list, so you can create as many variants of each as you like. Images uploaded in the Studio replace the gradient placeholders automatically.

### Page variants

You can prepare several versions of any page and switch between them at will.

1. Open the page list, for example **Home Pages**, and create a new document. Give it a **Variant Name** so you can tell your versions apart.
2. Fill in the content and publish.
3. Open **Site Settings**, set the matching active field, for example **Active Home Page**, to the variant you want live, and publish.

The site shows whichever variant is selected in Site Settings. Switch it anytime to apply a different one. If none is selected for a page, its most recently updated variant is used.

### Field level fallback

Content merges field by field. If a field in Sanity is left empty, the curated fallback copy is used for that field only, while every field you did fill in comes from Sanity. The site never shows a blank section because a single field was missing.

## Contact form

The contact form posts to `/api/contact`, which validates the submission. To deliver messages, connect an email provider such as Resend, Postmark, or SendGrid inside `src/app/api/contact/route.ts` at the marked integration point.

## Production build

```bash
npm run build
npm run start
```

## Notes

- Site copy is written without hyphens or dashes on purpose, to keep the tone clean and consistent.
- Motion respects the reduced motion preference for accessibility.
