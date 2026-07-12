import type { StructureResolver } from "sanity/structure";

const pageTypes = [
  { type: "homePage", title: "Home Pages" },
  { type: "aboutPage", title: "About Pages" },
  { type: "historyPage", title: "History Pages" },
  { type: "contactPage", title: "Contact Pages" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("YardConnect")
    .items([
      ...pageTypes.map(({ type, title }) =>
        S.documentTypeListItem(type).title(title),
      ),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
    ]);
