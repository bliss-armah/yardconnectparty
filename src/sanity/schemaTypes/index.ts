import type { SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { historyPage } from "./historyPage";
import { contactPage } from "./contactPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, aboutPage, historyPage, contactPage],
};
