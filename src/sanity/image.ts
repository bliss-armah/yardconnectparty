import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "./env";

const builder = createImageUrlBuilder({
  projectId: projectId || "placeholder",
  dataset,
});

export function urlForImage(source: unknown) {
  if (
    !source ||
    typeof source !== "object" ||
    !("asset" in source) ||
    !(source as { asset?: unknown }).asset
  ) {
    return null;
  }
  return builder.image(source as SanityImageSource).auto("format").fit("max");
}
