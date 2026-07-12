import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "activeHomePage",
      title: "Active Home Page",
      type: "reference",
      to: [{ type: "homePage" }],
      description:
        "Choose which home page variant is live on the site. Switch this anytime to apply a different version.",
    }),
    defineField({
      name: "activeAboutPage",
      title: "Active About Page",
      type: "reference",
      to: [{ type: "aboutPage" }],
      description:
        "Choose which about page variant is live on the site. Switch this anytime to apply a different version.",
    }),
    defineField({
      name: "activeHistoryPage",
      title: "Active History Page",
      type: "reference",
      to: [{ type: "historyPage" }],
      description:
        "Choose which history page variant is live on the site. Switch this anytime to apply a different version.",
    }),
    defineField({
      name: "activeContactPage",
      title: "Active Contact Page",
      type: "reference",
      to: [{ type: "contactPage" }],
      description:
        "Choose which contact page variant is live on the site. Switch this anytime to apply a different version.",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "A short line that captures the spirit of the party.",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "nextEventDate",
      title: "Next Event Date",
      type: "datetime",
    }),
    defineField({
      name: "nextEventLocation",
      title: "Next Event Location",
      type: "string",
    }),
    defineField({
      name: "ticketUrl",
      title: "Tickets or Registration Link",
      type: "url",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Contact Phone",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        defineField({
          name: "social",
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
