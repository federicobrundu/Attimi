/**
 * ATTIMI Logo PNG Export Script
 * Generates high-resolution raster exports from SVG sources.
 * Usage: node scripts/generate-logos.mjs
 * Requires: npm install --save-dev @resvg/resvg-js
 */

import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoDir = path.join(root, "public", "logo");
const pngDir = path.join(logoDir, "png");

if (!existsSync(pngDir)) mkdirSync(pngDir, { recursive: true });

const exports = [
  // Symbol only
  { src: "symbol.svg",               out: "symbol-512.png",         width: 512,  bg: "#1A1A1A", pad: 96  },
  { src: "symbol.svg",               out: "symbol-1024.png",        width: 1024, bg: "#1A1A1A", pad: 192 },
  { src: "symbol.svg",               out: "symbol-2048.png",        width: 2048, bg: "#1A1A1A", pad: 384 },
  // Vertical logo (square-safe)
  { src: "logo-vertical-dark.svg",   out: "logo-vertical-512.png",  width: 512  },
  { src: "logo-vertical-dark.svg",   out: "logo-vertical-1024.png", width: 1024 },
  { src: "logo-vertical-dark.svg",   out: "logo-vertical-2048.png", width: 2048 },
  // Horizontal logo
  { src: "logo-horizontal-dark.svg", out: "logo-horizontal-512.png",  width: 512  },
  { src: "logo-horizontal-dark.svg", out: "logo-horizontal-1024.png", width: 1024 },
  { src: "logo-horizontal-dark.svg", out: "logo-horizontal-2048.png", width: 2048 },
  // Monogram
  { src: "monogram.svg",             out: "monogram-512.png",       width: 512,  bg: "#1A1A1A", pad: 96  },
  { src: "monogram.svg",             out: "monogram-1024.png",      width: 1024, bg: "#1A1A1A", pad: 192 },
  // Social
  { src: "social/square-dark.svg",   out: "social-square-dark.png", width: 1200 },
  { src: "social/square-light.svg",  out: "social-square-light.png",width: 1200 },
  { src: "social/circle-dark.svg",   out: "social-circle-dark.png", width: 1200 },
  { src: "social/circle-light.svg",  out: "social-circle-light.png",width: 1200 },
  { src: "social/icon-dark.svg",     out: "app-icon-dark.png",      width: 1024 },
  { src: "social/icon-light.svg",    out: "app-icon-light.png",     width: 1024 },
  // Favicon rasters
  { src: "favicon/favicon-16.svg",   out: "favicon-16.png",         width: 16   },
  { src: "favicon/favicon-32.svg",   out: "favicon-32.png",         width: 32   },
  { src: "favicon/favicon-64.svg",   out: "favicon-64.png",         width: 64   },
];

let ok = 0;
let fail = 0;

for (const { src, out, width, bg, pad } of exports) {
  try {
    let svgContent = readFileSync(path.join(logoDir, src));

    // If a background color + padding is requested, wrap the SVG
    if (bg && pad) {
      const svgStr = svgContent.toString();
      const vbMatch = svgStr.match(/viewBox="([^"]+)"/);
      if (vbMatch) {
        const [x, y, w, h] = vbMatch[1].split(" ").map(Number);
        const newVb = `${x - pad} ${y - pad} ${w + pad * 2} ${h + pad * 2}`;
        const withBg = svgStr.replace(
          /(<svg[^>]*>)/,
          `$1<rect x="${x - pad}" y="${y - pad}" width="${w + pad * 2}" height="${h + pad * 2}" fill="${bg}"/>`
        ).replace(/viewBox="[^"]+"/, `viewBox="${newVb}"`);
        svgContent = Buffer.from(withBg);
      }
    }

    const resvg = new Resvg(svgContent, {
      fitTo: { mode: "width", value: width },
      font: {
        loadSystemFonts: true,
        defaultFontFamily: "Georgia",
      },
    });

    const rendered = resvg.render();
    const pngBuffer = rendered.asPng();
    const outPath = path.join(pngDir, out);
    writeFileSync(outPath, pngBuffer);
    console.log(`✓  ${out}  (${width}px)`);
    ok++;
  } catch (err) {
    console.error(`✗  ${out}: ${err.message}`);
    fail++;
  }
}

console.log(`\nDone — ${ok} generated, ${fail} failed.`);
console.log(`Output: public/logo/png/`);
