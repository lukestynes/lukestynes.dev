import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <Navbar useLight={false} />
      <main className="min-h-screen bg-neutral-900 py-10">
        <h1 className="pb-10 text-center text-5xl font-extrabold text-white">
          PROJECTS
        </h1>
        <div className="m-20 mt-0 flex justify-center">
          <div className="card px-10 lg:w-2/3 lg:px-0">
            <figure>
              <Image
                src="/img/flaresync.png"
                alt="FlareSync application screenshot"
                width="2000"
                height="1000"
              />
            </figure>
            <div className="card-body px-0">
              <div id="badges" className="flex">
                <div className="mr-3 rounded-3xl border border-secondary px-3 py-1 font-normal text-secondary">
                  2023
                </div>
                <div className="rounded-3xl border border-secondary px-3 py-1 font-normal text-secondary">
                  Typescript - React - Tauri
                </div>
              </div>
              <Link
                href="#"
                className="link-hover mt-3 text-3xl text-secondary"
              >
                FlareSync
              </Link>
              <p className="text-secondary">Desktop Application - API</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
