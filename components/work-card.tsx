import Image from "next/image";
import Link from "next/link";
import type { Work } from "../lib/types";

type WorkCardProps = {
  slug: Work["slug"];
  name: Work["name"];
  description: Work["description"];
  thumbnail: Work["images"][number];
};

export function WorkCard({
  slug,
  name,
  description,
  thumbnail,
}: WorkCardProps) {
  return (
    <article className="group relative w-[18.25rem] space-y-2 overflow-hidden sm:space-y-0">
      <div className="relative aspect-video">
        <Image
          src={`/static/images/${slug}/${thumbnail.url}`}
          alt={thumbnail.name}
          fill
          className="rounded-md object-cover object-top"
        />
      </div>
      <div className="cursor-pointer text-center transition-opacity duration-300 group-hover:opacity-100 sm:absolute sm:bottom-0 sm:bg-black/75 sm:px-4 sm:py-2 sm:opacity-0">
        <h3 className="text-lg font-medium">{name}</h3>
        <p
          className="overflow-hidden text-sm leading-tight"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
      </div>
      {/* TODO: Add work detail page link */}
      <Link href="#" className="after:absolute after:inset-0"></Link>
    </article>
  );
}
