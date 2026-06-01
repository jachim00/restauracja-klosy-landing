// Jednorazowa optymalizacja zdjęć w miejscu: resize do max 1600px + mozjpeg q78.
// Zachowuje nazwy .jpg (zero zmian w kodzie). Uruchom: node scripts/optimize-images.mjs
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const BASE = "public/assets/restauracja-klosy";
const CATS = ["food", "interior", "events", "communions", "catering"];
const MAX_W = 1600;

let before = 0, after = 0, count = 0;
for (const cat of CATS) {
  const dir = join(BASE, cat);
  let files = [];
  try { files = await readdir(dir); } catch { continue; }
  for (const f of files) {
    if (!/\.jpe?g$/i.test(f)) continue;
    const p = join(dir, f);
    const sizeBefore = (await stat(p)).size;
    const input = await readFile(p);
    const out = await sharp(input)
      .rotate() // respektuj EXIF orientation
      .resize({ width: MAX_W, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();
    await writeFile(p, out);
    before += sizeBefore; after += out.length; count++;
    console.log(`${cat}/${f}: ${(sizeBefore/1024|0)}KB -> ${(out.length/1024|0)}KB`);
  }
}
console.log(`\n${count} plikow. Razem: ${(before/1048576).toFixed(2)}MB -> ${(after/1048576).toFixed(2)}MB`);
