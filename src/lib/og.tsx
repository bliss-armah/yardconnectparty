import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/** Shared config + renderer for the Open Graph and Twitter card images. */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "YardConnect — the party the whole city waits for all year.";

const INK = "#0a0a0a";
const CREAM = "#f4f2ec";
const MUTED = "#9a978f";
const ACCENT = "#c9a24a";

export async function renderOgImage() {
  // Reuse the Garet font files already bundled in the repo so the card is
  // on-brand without any network fetch. process.cwd() is the project root.
  const [garetHeavy, garetBook] = await Promise.all([
    readFile(join(process.cwd(), "src/garet/Garet-Heavy.ttf")),
    readFile(join(process.cwd(), "src/garet/Garet-Book.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: INK,
          color: CREAM,
          fontFamily: "Garet Book",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 22,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <div style={{ width: 44, height: 3, backgroundColor: ACCENT }} />
          One night. One yard.
        </div>

        <div
          style={{
            fontFamily: "Garet Heavy",
            fontSize: 150,
            lineHeight: 1,
            marginTop: 28,
            color: CREAM,
          }}
        >
          YardConnect
        </div>

        <div
          style={{
            fontSize: 40,
            marginTop: 28,
            maxWidth: 900,
            color: MUTED,
          }}
        >
          The party the whole city waits for all year.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Garet Heavy", data: garetHeavy, weight: 800, style: "normal" },
        { name: "Garet Book", data: garetBook, weight: 400, style: "normal" },
      ],
    },
  );
}
