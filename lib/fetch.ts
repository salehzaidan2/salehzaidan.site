import fs from "fs";
import type { Work } from "./types";

export function getWorksData(displayLimit?: number) {
  return fs
    .readdirSync("./data/works")
    .map((filename) => {
      const rawContent = fs.readFileSync(`./data/works/${filename}`, "utf-8");
      const slug = filename.replace(/\.json$/, "");
      return {
        slug,
        ...JSON.parse(rawContent),
      } as Work;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, displayLimit);
}
