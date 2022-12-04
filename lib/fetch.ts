import fs from "fs";
import type { Work } from "./types";

export function getWorksSlug() {
  return fs
    .readdirSync("./data/works")
    .map((file) => file.replace(/\.json$/, ""));
}

export function getWorkData(slug: string) {
  const rawContent = fs.readFileSync(`./data/works/${slug}.json`, "utf-8");
  return {
    slug,
    ...JSON.parse(rawContent),
  } as Work;
}

export function getWorksData(length?: number) {
  return getWorksSlug()
    .map((slug) => getWorkData(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, length);
}
