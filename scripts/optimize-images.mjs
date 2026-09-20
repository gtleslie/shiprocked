#!/usr/bin/env node
/**
 * Lossy in-place optimization for site images under public/ and opengraph.
 * - JPEG: mozjpeg, progressive, max width by role
 * - Opaque PNG (backgrounds): convert to JPEG, remove PNG
 * - PNG with alpha: resize if huge + max compression
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const JPEG_QUALITY = 82;
const MAX_PHOTO_WIDTH = 2400;
const MAX_BACKGROUND_WIDTH = 1920;
const MAX_ALPHA_PNG_WIDTH = 2400;

/** Opaque PNGs used as full-bleed backgrounds → JPEG (paths relative to public/). */
const OPAQUE_PNG_TO_JPEG = new Set([
  "assets/background-1.png",
  "assets/background-2-about.png",
  "assets/dock-to-deadline.png",
  "assets/duo-background.png",
  "assets/contact-artboard.png",
]);

const SCAN_ROOTS = [
  path.join(ROOT, "public"),
  path.join(ROOT, "src/app/opengraph-image.jpg"),
];

function collectFiles() {
  const files = [];
  for (const entry of SCAN_ROOTS) {
    if (!fs.existsSync(entry)) continue;
    const stat = fs.statSync(entry);
    if (stat.isFile()) {
      files.push(entry);
      continue;
    }
    for (const dir of walk(entry)) {
      for (const name of fs.readdirSync(dir)) {
        const full = path.join(dir, name);
        if (!fs.statSync(full).isFile()) continue;
        if (/\.(jpe?g|png|webp)$/i.test(name)) files.push(full);
      }
    }
  }
  return [...new Set(files)].sort();
}

function* walk(dir) {
  yield dir;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) yield* walk(full);
  }
}

function relPublic(abs) {
  const pub = path.join(ROOT, "public") + path.sep;
  if (abs.startsWith(pub)) return abs.slice(pub.length);
  return null;
}

function isPhotoPath(rel) {
  return rel?.startsWith("assets/photos/");
}

function maxWidthFor(rel, meta) {
  if (rel && OPAQUE_PNG_TO_JPEG.has(rel)) return MAX_BACKGROUND_WIDTH;
  if (rel && isPhotoPath(rel)) return MAX_PHOTO_WIDTH;
  if (rel?.includes("meet-the-characters")) return MAX_BACKGROUND_WIDTH;
  if (meta.hasAlpha) return MAX_ALPHA_PNG_WIDTH;
  return MAX_BACKGROUND_WIDTH;
}

async function writeTempThenReplace(tmp, dest) {
  await fs.promises.rename(tmp, dest);
}

async function optimizeJpeg(file, maxWidth) {
  const tmp = `${file}.opt.tmp`;
  const before = fs.statSync(file).size;
  await sharp(file)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toFile(tmp);
  await writeTempThenReplace(tmp, file);
  return fs.statSync(file).size - before;
}

async function optimizePng(file, maxWidth) {
  const tmp = `${file}.opt.tmp`;
  const before = fs.statSync(file).size;
  let pipeline = sharp(file).rotate();
  const meta = await sharp(file).metadata();
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }
  await pipeline
    .png({ compressionLevel: 9, effort: 10, adaptiveFiltering: true })
    .toFile(tmp);
  await writeTempThenReplace(tmp, file);
  return fs.statSync(file).size - before;
}

async function convertOpaquePngToJpeg(file, rel, maxWidth) {
  const jpg = file.replace(/\.png$/i, ".jpg");
  const tmp = `${jpg}.opt.tmp`;
  const before = fs.statSync(file).size;
  await sharp(file)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toFile(tmp);
  await writeTempThenReplace(tmp, jpg);
  fs.unlinkSync(file);
  const after = fs.statSync(jpg).size;
  console.log(`  convert ${rel} → ${rel.replace(/\.png$/i, ".jpg")}`);
  return after - before;
}

async function processFile(file) {
  const rel = relPublic(file);
  const ext = path.extname(file).toLowerCase();
  const meta = await sharp(file).metadata();
  const maxW = maxWidthFor(rel, meta);

  if (ext === ".png" && rel && OPAQUE_PNG_TO_JPEG.has(rel)) {
    return convertOpaquePngToJpeg(file, rel, maxW);
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    return optimizeJpeg(file, maxW);
  }

  if (ext === ".png") {
    return optimizePng(file, maxW);
  }

  if (ext === ".webp") {
    const tmp = `${file}.opt.tmp`;
    const before = fs.statSync(file).size;
    await sharp(file)
      .rotate()
      .resize({ width: maxW, withoutEnlargement: true })
      .webp({ quality: JPEG_QUALITY })
      .toFile(tmp);
    await writeTempThenReplace(tmp, file);
    return fs.statSync(file).size - before;
  }

  return 0;
}

async function main() {
  const files = collectFiles();
  let totalDelta = 0;
  console.log(`Optimizing ${files.length} images…\n`);

  for (const file of files) {
    const before = fs.statSync(file).size;
    try {
      const delta = await processFile(file);
      totalDelta += delta;
      const after = fs.existsSync(file) ? fs.statSync(file).size : 0;
      const rel = path.relative(ROOT, file);
      const saved = before - after;
      if (saved > 1024) {
        console.log(
          `${(saved / 1024 / 1024).toFixed(2)} MB saved  ${rel}${!fs.existsSync(file) ? " (replaced by .jpg)" : ""}`,
        );
      }
    } catch (err) {
      console.error(`FAIL ${file}:`, err.message);
    }
  }

  console.log(`\nTotal change: ${(totalDelta / 1024 / 1024).toFixed(2)} MB`);
}

main();
