import { defineArrayMember, defineField, defineType } from "sanity";

export const historyPage = defineType({
  name: "historyPage",
  title: "History Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Variant Name",
      type: "string",
      description:
        "Internal label to tell your history page versions apart. Not shown on the site.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "milestone",
          fields: [
            { name: "year", title: "Year", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
          preview: {
            select: { title: "title", subtitle: "year", media: "image" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "heading" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Untitled history page",
      subtitle: subtitle || "No heading yet",
    }),
  },
});
