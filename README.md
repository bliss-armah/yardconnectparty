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

- **Site Settings** for the event name, tagline, next event date, contact details, and social links.
- **Home Page** for the hero, stats, highlights, and gallery.
- **About Page** for the story and values.
- **History Page** for the timeline of past editions.
- **Contact Page** for contact details and the form note.

Images uploaded in the Studio replace the gradient placeholders automatically.

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
