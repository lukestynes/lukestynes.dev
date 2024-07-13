import Image from "next/image";
import Link from "next/link";

export default function CustomLink({
  link,
  img,
  title,
}: {
  link: string;
  img: string;
  title: string;
}) {
  return (
    <div className="hover-card mb-5 rounded-lg bg-white shadow-xl">
      <Link href={link}>
        <div
          className="flex items-center justify-between p-2"
          style={{ height: 75 }}
        >
          <Image src={img} alt="Thumbnail" width="75" height="75" />
          <p className="mr-11">{title}</p>
          <Image src="/icons/link.svg" alt="" width="25" height="25" />
        </div>
      </Link>
    </div>
  );
}
