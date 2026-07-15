import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Variant Name",
      type: "string",
      description:
        "Internal label to tell your home page versions apart, for example \"Summer 2026\" or \"Sold out\". Not shown on the site.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroKicker",
      title: "Hero Kicker",
      type: "string",
      description: "Small line above the main heading.",
    }),
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroVideo",
      title: "Hero Background Video",
      type: "file",
      options: { accept: "video/mp4" },
      description:
        "Upload a short looping mp4 that plays behind the hero. Takes priority over the link below.",
    }),
    defineField({
      name: "heroVideoUrl",
      title: "Hero Video Link (optional)",
      type: "url",
      description:
        "Use this instead if your video is hosted elsewhere, for example on a CDN. The uploaded file above wins if both are set.",
    }),
    defineField({
      name: "heroImages",
      title: "Hero Images",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
      description: "Used as the hero backdrop when no video is set.",
    }),
    defineField({
      name: "aftermovieFile",
      title: "Aftermovie Video",
      type: "file",
      options: { accept: "video/mp4" },
      description:
        "Upload the highlight film that opens when guests press play. Takes priority over the link below.",
    }),
    defineField({
      name: "aftermovieUrl",
      title: "Aftermovie Link (optional)",
      type: "url",
      description:
        "Use this instead if your aftermovie is hosted elsewhere. The uploaded file above wins if both are set.",
    }),
    defineField({
      name: "introHeading",
      title: "Intro Heading",
      type: "string",
    }),
    defineField({
      name: "introBody",
      title: "Intro Body",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "stats",
      title: "Highlight Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
    defineField({
      name: "highlights",
      title: "Experience Highlights",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
            { name: "icon", title: "Icon Emoji", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Featured Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "image", title: "Image", type: "image", options: { hotspot: true } },
            { name: "caption", title: "Caption", type: "string" },
          ],
          preview: { select: { title: "caption", media: "image" } },
        }),
      ],
    }),
    defineField({
      name: "ctaHeading",
      title: "Closing Call To Action Heading",
      type: "string",
    }),
    defineField({
      name: "ctaBody",
      title: "Closing Call To Action Body",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "heroHeading" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Untitled home page",
      subtitle: subtitle ? `Hero: ${subtitle}` : "No hero heading yet",
    }),
  },
});
