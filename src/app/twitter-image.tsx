import { renderOgImage } from "@/lib/og";

export { size, contentType, alt } from "@/lib/og";

export default function Image() {
  return renderOgImage();
}
