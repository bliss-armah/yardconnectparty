import type { StructureResolver } from "sanity/structure";

const singletons = [
  { id: "siteSettings", title: "Site Settings", icon: "⚙️" },
  { id: "homePage", title: "Home Page", icon: "🏠" },
  { id: "aboutPage", title: "About Page", icon: "ℹ️" },
  { id: "historyPage", title: "History Page", icon: "📜" },
  { id: "contactPage", title: "Contact Page", icon: "✉️" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("YardConnect")
    .items(
      singletons.map(({ id, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(id).documentId(id)),
      ),
    );
