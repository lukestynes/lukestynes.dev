"use client";
import Image from "next/image";

export default function IconText({
  src,
  alt,
  text,
  width,
  height,
}: {
  src: string;
  alt: string;
  text: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex">
      <Image
        className="mr-2"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <p>{text}</p>
    </div>
  );
}
