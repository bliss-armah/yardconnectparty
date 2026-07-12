import { sanityFetch } from "@/sanity/client";

/* Types */

export type SanityImage = {
  asset?: { _ref?: string; _type?: string };
  hotspot?: unknown;
} | null;

export type SiteSettings = {
  title: string;
  tagline?: string;
  logo?: SanityImage;
  nextEventDate?: string;
  nextEventLocation?: string;
  ticketUrl?: string;
  email?: string;
  phone?: string;
  address?: string;
  socials?: { platform?: string; url?: string }[];
};

export type HomeContent = {
  heroKicker?: string;
  heroHeading: string;
  heroSubheading?: string;
  heroVideoUrl?: string;
  heroImages?: SanityImage[];
  aftermovieUrl?: string;
  introHeading?: string;
  introBody?: string;
  stats?: { value?: string; label?: string }[];
  highlights?: { title?: string; description?: string; icon?: string }[];
  gallery?: { image?: SanityImage; caption?: string; src?: string }[];
  ctaHeading?: string;
  ctaBody?: string;
};

export type AboutContent = {
  heading: string;
  intro?: string;
  body?: unknown[];
  image?: SanityImage;
  src?: string;
  values?: { title?: string; description?: string }[];
};

export type Milestone = {
  year?: string;
  title?: string;
  description?: string;
  image?: SanityImage;
  src?: string;
};

export type HistoryContent = {
  heading: string;
  intro?: string;
  timeline?: Milestone[];
};

export type ContactContent = {
  heading: string;
  intro?: string;
  email?: string;
  phone?: string;
  address?: string;
  hours?: string;
  formNote?: string;
};

/* Fallback content. Curated copy so the site looks complete before the CMS
   is connected. All visible copy avoids hyphens and dashes on purpose. */

export const fallbackSettings: SiteSettings = {
  title: "YardConnect",
  tagline: "The party the whole city waits for all year.",
  nextEventDate: "2026-08-15T18:00:00.000Z",
  nextEventLocation: "The Grand Yard, Accra",
  email: "hello@yardconnect.party",
  phone: "233 20 000 0000",
  address: "The Grand Yard, Accra, Ghana",
  socials: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "TikTok", url: "https://tiktok.com" },
    { platform: "YouTube", url: "https://youtube.com" },
  ],
};

export const fallbackHome: HomeContent = {
  heroKicker: "One night. One yard.",
  heroHeading: "YardConnect",
  heroSubheading: "The party the whole city waits for all year.",
  heroVideoUrl: "/media/hero.mp4",
  aftermovieUrl: "/media/hero.mp4",
  introHeading: "Where the city becomes one yard",
  introBody:
    "Live sound, real food, and thousands of people who came to connect. Press play and feel it.",
  stats: [
    { value: "12", label: "Years" },
    { value: "8K", label: "Guests" },
    { value: "40", label: "Artists" },
  ],
  highlights: [
    {
      icon: "01",
      title: "Sound all night",
      description: "Live bands and DJs from golden hour to sunrise.",
    },
    {
      icon: "02",
      title: "Flavors of home",
      description: "Local kitchens and street vendors in one place.",
    },
    {
      icon: "03",
      title: "Room to connect",
      description: "Open floors to dance and corners to meet someone new.",
    },
  ],
  gallery: [
    { src: "/media/confetti.jpg", caption: "Confetti drop at midnight" },
    { src: "/media/band.jpg", caption: "Live on the main stage" },
    { src: "/media/golden-lights.jpg", caption: "Golden hour crowd" },
    { src: "/media/dj-deck.jpg", caption: "Behind the decks" },
    { src: "/media/crowd-phone.jpg", caption: "Capturing the moment" },
    { src: "/media/stage-lights.jpg", caption: "Under the lights" },
    { src: "/media/confetti-stage.jpg", caption: "The final song" },
    { src: "/media/crowd-white.jpg", caption: "Hands in the air" },
  ],
  ctaHeading: "Your place at the yard is waiting",
  ctaBody: "Once you spend one night with us, you never miss another.",
};

export const fallbackAbout: AboutContent = {
  heading: "About YardConnect",
  intro:
    "We are a community built around one belief. When people gather with open hearts and good music, something rare happens.",
  src: "/media/crowd-smoke.jpg",
  values: [
    {
      title: "Community first",
      description:
        "Every choice we make starts with the people. YardConnect exists to bring neighbors, friends, and strangers into one shared night.",
    },
    {
      title: "Culture on show",
      description:
        "We celebrate the sound, the food, and the style of our city, and we give local talent the stage they deserve.",
    },
    {
      title: "An experience, not just an event",
      description:
        "From the first light to the last song, every detail is designed so the night feels effortless and unforgettable.",
    },
    {
      title: "Better every year",
      description:
        "We listen, we learn, and we return bigger and warmer each season, without ever losing the spirit that started it all.",
    },
  ],
};

export const fallbackHistory: HistoryContent = {
  heading: "Our story so far",
  intro:
    "What started as a handful of friends in a backyard has grown into the celebration the whole city waits for. Here is how the yard came to life.",
  timeline: [
    {
      year: "2014",
      title: "The first yard",
      description:
        "A few friends, one speaker, and a backyard full of laughter. The very first YardConnect welcomed around one hundred people who simply wanted to dance.",
      src: "/media/toast.jpg",
    },
    {
      year: "2016",
      title: "Word travels fast",
      description:
        "The gathering doubled, then doubled again. Local artists asked to perform, and the yard earned its reputation as the warmest night of the summer.",
      src: "/media/band.jpg",
    },
    {
      year: "2018",
      title: "A stage of our own",
      description:
        "We built our first proper stage and welcomed our first headline act. The community gallery began as a wall of photos guests pinned themselves.",
      src: "/media/stage-lights.jpg",
    },
    {
      year: "2021",
      title: "The comeback night",
      description:
        "After a season apart, the city returned in full force. That reunion reminded everyone why YardConnect matters so much.",
      src: "/media/crowd-white.jpg",
    },
    {
      year: "2024",
      title: "Ten years strong",
      description:
        "A full decade of the yard. Thousands of guests, dozens of artists, and a family that keeps on growing every single season.",
      src: "/media/golden-lights.jpg",
    },
    {
      year: "2026",
      title: "The next chapter",
      description:
        "A brand new venue, a bigger lineup, and the same heart that started it all. The best yard is still ahead of us.",
      src: "/media/confetti.jpg",
    },
  ],
};

export const fallbackContact: ContactContent = {
  heading: "Say hello",
  intro:
    "Questions about tickets, partnerships, or performing on our stage? We would love to hear from you. Reach out and our team will get back to you soon.",
  email: "hello@yardconnect.party",
  phone: "233 20 000 0000",
  address: "The Grand Yard, Accra, Ghana",
  hours: "We reply within one business day.",
  formNote:
    "Prefer to write directly? Send us a note using the form and tell us how we can help.",
};

/* GROQ queries */

const settingsQuery = `*[_type == "siteSettings"][0]{
  title, tagline, logo, nextEventDate, nextEventLocation, ticketUrl,
  email, phone, address, socials
}`;

// Resolve the home page the editor marked active in Site Settings. If none is
// chosen yet, fall back to the most recently updated home page variant.
const homeQuery = `coalesce(
  *[_type == "siteSettings"][0].activeHomePage->,
  *[_type == "homePage"] | order(_updatedAt desc)[0]
){
  heroKicker, heroHeading, heroSubheading, heroVideoUrl, heroImages, aftermovieUrl,
  introHeading, introBody, stats, highlights,
  gallery, ctaHeading, ctaBody
}`;

const aboutQuery = `coalesce(
  *[_type == "siteSettings"][0].activeAboutPage->,
  *[_type == "aboutPage"] | order(_updatedAt desc)[0]
){
  heading, intro, body, image, values
}`;

const historyQuery = `coalesce(
  *[_type == "siteSettings"][0].activeHistoryPage->,
  *[_type == "historyPage"] | order(_updatedAt desc)[0]
){
  heading, intro, timeline
}`;

const contactQuery = `coalesce(
  *[_type == "siteSettings"][0].activeContactPage->,
  *[_type == "contactPage"] | order(_updatedAt desc)[0]
){
  heading, intro, email, phone, address, hours, formNote
}`;

/* Fetchers with fallback */

export function getSettings() {
  return sanityFetch<SiteSettings>(settingsQuery, fallbackSettings);
}

export function getHome() {
  return sanityFetch<HomeContent>(homeQuery, fallbackHome);
}

export function getAbout() {
  return sanityFetch<AboutContent>(aboutQuery, fallbackAbout);
}

export function getHistory() {
  return sanityFetch<HistoryContent>(historyQuery, fallbackHistory);
}

export function getContact() {
  return sanityFetch<ContactContent>(contactQuery, fallbackContact);
}
