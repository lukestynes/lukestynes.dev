import CustomLink from "@/components/custom-link";
import { Boxes } from "@/components/ui/background-boxes";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    icon: "/icons/instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/lukestynes.dev",
  },
  {
    icon: "/icons/email.svg",
    alt: "Email",
    link: "mailto:stynesluke@gmail.com",
  },
  {
    icon: "/icons/threads.svg",
    alt: "Threads",
    link: "https://www.threads.net/@lukestynes.dev",
  },
  {
    icon: "/icons/github.svg",
    alt: "Github",
    link: "https://www.github.com/lukestynes",
  },
  {
    icon: "/icons/x.svg",
    alt: "X",
    link: "https://x.com/lukestynes",
  },
];

const links = [
  {
    image: "/img/links/website.svg",
    name: "My Website",
    link: "/",
  },
  {
    image: "/img/links/medium.png",
    name: "Checkout my writing",
    link: "https://lukestynes.medium.com",
  },
];

export default function Links() {
  return (
    <div className="h-screen bg-neutral-50">
      <div className="mx-auto max-w-md px-5 py-10">
        <div>
          <h1 className="pb-3 text-center text-3xl font-bold">
            Kia Ora, I'm Luke
          </h1>
          <p>
            I make videos on the internet sometimes and build projects
            sometimes. You're probably looking for something you saw in one of
            my videos or on my website. Hopefully you find it below.
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5">
          {socials.map((social, index) => (
            <Link key={index} href={social.link} className="hover-social">
              <Image
                src={social.icon}
                alt={social.alt}
                height="30"
                width="30"
              />
            </Link>
          ))}
        </div>
        <div className="pt-10">
          <h2 className="pb-5 text-center text-xl font-semibold">
            Personal Links
          </h2>
          {links.map((linkVal, index) => (
            <CustomLink
              key={index}
              link={linkVal.link}
              img={linkVal.image}
              title={linkVal.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
