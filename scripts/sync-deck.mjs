import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const target = resolve(root, "public", "deck");

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(resolve(root, "index.html"), resolve(target, "index.html"));
await cp(resolve(root, "assets"), resolve(target, "assets"), { recursive: true });
await rm(resolve(target, "assets", "video-analysis-calculation.mp4"), { force: true });
