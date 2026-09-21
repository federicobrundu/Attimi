/* ATTIMI Logo PNG Export — CommonJS */
const { Resvg } = require("@resvg/resvg-js");
const { readFileSync, writeFileSync, mkdirSync, existsSync } = require("fs");
const path = require("path");

const root    = path.join(__dirname, "..");
const logoDir = path.join(root, "public", "logo");
const pngDir  = path.join(logoDir, "png");
if (!existsSync(pngDir)) mkdirSync(pngDir, { recursive: true });

const EXPORTS = [
  // Symbol only
  { src: "symbol.svg",               out: "symbol-512.png",           w: 512  },
  { src: "symbol.svg",               out: "symbol-1024.png",          w: 1024 },
  { src: "symbol.svg",               out: "symbol-2048.png",          w: 2048 },
  // Vertical logo
  { src: "logo-vertical-dark.svg",   out: "logo-vertical-512.png",    w: 512  },
  { src: "logo-vertical-dark.svg",   out: "logo-vertical-1024.png",   w: 1024 },
  { src: "logo-vertical-dark.svg",   out: "logo-vertical-2048.png",   w: 2048 },
  // Horizontal logo
  { src: "logo-horizontal-dark.svg", out: "logo-horizontal-512.png",  w: 1280 },
  { src: "logo-horizontal-dark.svg", out: "logo-horizontal-1024.png", w: 2560 },
  // Monogram
  { src: "monogram.svg",             out: "monogram-512.png",         w: 512  },
  { src: "monogram.svg",             out: "monogram-1024.png",        w: 1024 },
  // Social
  { src: "social/square-dark.svg",   out: "social-square-dark.png",   w: 1200 },
  { src: "social/square-light.svg",  out: "social-square-light.png",  w: 1200 },
  { src: "social/circle-dark.svg",   out: "social-circle-dark.png",   w: 1200 },
  { src: "social/circle-light.svg",  out: "social-circle-light.png",  w: 1200 },
  { src: "social/icon-dark.svg",     out: "app-icon-1024.png",        w: 1024 },
  // Favicon rasters
  { src: "favicon/favicon-16.svg",   out: "favicon-16.png",           w: 16   },
  { src: "favicon/favicon-32.svg",   out: "favicon-32.png",           w: 32   },
  { src: "favicon/favicon-64.svg",   out: "favicon-64.png",           w: 64   },
];

/** Read an SVG file and return a clean UTF-8 Buffer (handles Windows BOM). */
function readSvg(filePath) {
  const raw = readFileSync(filePath);
  let str;
  if (raw[0] === 0xFF && raw[1] === 0xFE) {
    str = raw.toString("utf16le").replace(/^\uFEFF/, "");
  } else if (raw[0] === 0xFE && raw[1] === 0xFF) {
    const s = Buffer.allocUnsafe(raw.length);
    for (let i = 0; i < raw.length; i += 2) { s[i] = raw[i + 1]; s[i + 1] = raw[i]; }
    str = s.toString("utf16le").replace(/^\uFEFF/, "");
  } else if (raw[0] === 0xEF && raw[1] === 0xBB && raw[2] === 0xBF) {
    str = raw.toString("utf8").replace(/^\uFEFF/, "");
  } else {
    str = raw.toString("utf8").replace(/^\uFEFF/, "");
  }
  // Strip @import (browser-only; causes issues in offline SVG renderers)
  str = str.replace(/<style>[^]*?<\/style>/g, "");
  // Strip XML control characters invalid outside CDATA
  str = str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");
  return Buffer.from(str, "utf8");
}

let ok = 0, fail = 0;
const log = [];

for (const { src, out, w } of EXPORTS) {
  try {
    const svg = readSvg(path.join(logoDir, src));
    const resvg = new Resvg(svg, {
      fitTo: { mode: "width", value: w },
      font:  { loadSystemFonts: true, defaultFontFamily: "Georgia" },
    });
    writeFileSync(path.join(pngDir, out), resvg.render().asPng());
    log.push(`OK  ${out}  (${w}px)`);
    ok++;
  } catch (err) {
    log.push(`ERR ${out}: ${err.message}`);
    fail++;
  }
}

log.push(`\nTotal: ${ok} generated, ${fail} failed`);
writeFileSync(path.join(pngDir, "generate.log"), log.join("\n"));
