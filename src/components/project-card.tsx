import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  subtitle,
  year,
  tags,
  imageSrc,
  slug,
}: {
  title: string;
  subtitle: string;
  year: string;
  tags: string;
  imageSrc: string;
  slug: string;
}) {
  return (
    <div className="card h-full border border-neutral-800 bg-neutral-900 p-3 px-3">
      <figure className="flex flex-col">
        {imageSrc !== "none" && (
          <Image
            src={imageSrc}
            className="rounded-xl"
            alt={`${title} screenshot`}
            width="2000"
            height="1000"
          />
        )}
        {/* <p className="align-left w-full pt-3 text-secondary">Featured</p> */}
      </figure>
      <div className="card-body px-0 py-0 pt-5">
        <Link href={slug} className="link-hover mt-3 text-3xl text-secondary">
          {title}
        </Link>
        <p className="text-secondary">{subtitle}</p>

        <div id="badges" className="flex">
          <div className="mr-3 rounded-3xl border border-secondary px-3 py-1 font-normal text-secondary">
            {year}
          </div>
          <div className="rounded-3xl border border-secondary px-3 py-1 font-normal text-secondary">
            {tags}
          </div>
        </div>
      </div>
    </div>
  );
}
