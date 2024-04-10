import Clock from "@/components/clock";
import IconText from "@/components/icontext";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    src: "/img/github.svg",
    alt: "GitHub Logo",
    text: "GitHub",
  },
  {
    src: "/img/linkedin.svg",
    alt: "LinkedIn Logo",
    text: "LinkedIn",
  },
  {
    src: "/img/instagram.svg",
    alt: "Instagram Logo",
    text: "Instagram",
  },
  {
    src: "/img/spotify.svg",
    alt: "Spotify Logo",
    text: "Spotify",
  },
];

export default function HomePage() {
  return (
    <main>
      <div id="hero" className="hero my-10 lg:m-0 lg:min-h-screen">
        <div className="">
          <Image src="/img/hero.svg" alt="hero" width="844" height="720" />
        </div>
      </div>
      <div className="bg-primary py-52 text-white">
        <div className="max-w-screen">
          <div className="mx-20 max-w-5xl lg:mx-auto">
            <h1 className="text-4xl font-bold md:text-5xl">
              Fourth year software engineering student <br />
              focused on crafting modern digital <br /> experiences.
            </h1>
          </div>
        </div>
      </div>
      <div className="py-20">
        <h1 className="mb-10 text-center text-5xl font-extrabold">ABOUT ME</h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              className="ml-32 mr-32"
              src="/img/me.png"
              width="350"
              height="400"
              alt="A photo of me"
            />
            <div>
              <div className="">
                <p className="py-6">
                  I’m a fourth year software engineering student at the
                  University of Canterbury based in Christchurch, New Zealand.{" "}
                  <br />
                  <br />
                  Combining my skills in design, engineering, and business I
                  work to craft elevating digital experiences with a unique
                  perspective.
                  <br />
                  <br /> Outside of software you’ll find me outdoors, up the
                  mountains, at the beach or in a gym.
                </p>
                <div className="my-5 flex justify-center lg:justify-start">
                  <button className="btn btn-primary rounded-3xl font-normal text-white">
                    More about me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 py-20">
        <h1 className="mb-16 text-center text-5xl font-extrabold text-white">
          PROJECTS
        </h1>
        <div className="flex justify-center">
          <div className="card px-10 lg:w-2/3 lg:px-0">
            <figure>
              <Image
                src="/img/flaresync.png"
                alt="FlareSync application screenshot"
                width="2000"
                height="2000"
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
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="btn btn-secondary rounded-3xl text-lg font-normal text-neutral-900"
          >
            View More
          </Link>
        </div>
      </div>
      <div className="py-20">
        <h1 className="mb-10 text-center text-5xl font-extrabold">
          GET IN TOUCH
        </h1>
        <div className="hero">
          <div className="hero-content flex-col gap-20 lg:flex-row">
            <div className="flex-col justify-center">
              <p className="text-3xl font-medium">Got an interesting idea?</p>
              <p className="mb-10 text-3xl font-medium">Lets talk about it.</p>
              <form>
                <div className="flex-col justify-center">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered mb-2 w-full text-lg text-primary placeholder-primary focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered mb-2 w-full text-lg text-primary placeholder-primary focus:outline-none"
                />
                <textarea
                  className="textarea textarea-bordered textarea-lg mb-2 min-h-40 w-full px-4 py-2 text-primary placeholder-primary focus:outline-none"
                  placeholder="Your message"
                ></textarea>
                <div className="flex justify-center">
                  <button className="btn btn-primary mt-5 rounded-3xl font-normal text-white">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div>
              <div className="">
                <h3 className="text-xl font-bold ">Contact Details</h3>
                <IconText
                  src="/img/email.svg"
                  alt="Email"
                  text="stynesluke@gmail.com"
                  width={20}
                  height={20}
                />
                <h3 className="mt-5 text-xl font-bold">My Socials</h3>
                {socialLinks.map((link, index) => (
                  <div className="py-2">
                    <IconText
                      key={index}
                      src={link.src}
                      alt={link.alt}
                      text={link.text}
                      width={20}
                      height={20}
                    />
                  </div>
                ))}
                <h3 className="mt-5 text-xl font-bold">Location</h3>
                <div className="py-2">
                  <IconText
                    src="/img/location.svg"
                    alt="Location"
                    text="Christchurch, New Zealand"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="py-2">
                  <div className="flex">
                    <Image
                      className="mr-2"
                      src="/img/clock.svg"
                      alt="Clock"
                      width="20"
                      height="20"
                    />
                    <Clock />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
