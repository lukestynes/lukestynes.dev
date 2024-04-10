import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-primary p-20 text-neutral-content">
      <aside className="lg:justify-startlg ml:20 w-full justify-center">
        <Image src="/img/footer.svg" alt="stynes." width="440" height="360" />
        <p className="pt-10 text-white">
          &copy; Luke Stynes {new Date().getFullYear()}
        </p>
      </aside>
      <nav className="h-full w-full items-center justify-center lg:justify-start">
        <div className="flex flex-col gap-10 align-middle text-4xl font-bold text-white">
          <Link href="/projects">PROJECTS</Link>
          <Link href="/about">ABOUT ME</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </nav>
    </footer>
  );
}
