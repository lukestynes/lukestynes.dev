import Image from "next/image";

export default function FlareSyncPage() {
  return (
    <main className="flex justify-center">
      <article className="lg:prose-xl prose w-full">
        <h1 className="pt-10">FLARESYNC</h1>
        <Image
          src="/img/flaresync.png"
          alt="FlareSync application screenshot"
          width="2000"
          height="1000"
          className="items-center"
        />
      </article>
    </main>
  );
}
