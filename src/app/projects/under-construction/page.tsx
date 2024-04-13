import Navbar from "@/components/navbar";

export default function UnderConstructionPage() {
  return (
    <div>
      <Navbar useLight={false} />
      <main
        className="flex min-h-[calc(100vh-68px)] flex-col items-center justify-center bg-neutral-900
      "
      >
        <h1 className="text-center text-4xl text-white">
          The Project write ups are not yet finished!
        </h1>
        <h2 className="pt-20 text-center text-2xl text-white">
          Check back soon...
        </h2>
      </main>
    </div>
  );
}
