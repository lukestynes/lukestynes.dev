"use client";
import Clock from "@/components/clock";
import IconText from "@/components/icontext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import Navbar from "@/components/navbar";

const socialLinks = [
  {
    src: "/img/github.svg",
    alt: "GitHub Logo",
    text: "GitHub",
    link: "https://www.github.com/lukestynes",
  },
  {
    src: "/img/linkedin.svg",
    alt: "LinkedIn Logo",
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/lukestynes",
  },
  {
    src: "/img/instagram.svg",
    alt: "Instagram Logo",
    text: "Instagram",
    link: "https://www.instagram.com/lukestynes",
  },
  {
    src: "/img/spotify.svg",
    alt: "Spotify Logo",
    text: "Spotify",
    link: "https://open.spotify.com/user/luke.stynes?si=421405bee30a4b37",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar useLight={true} />
      <div className="hero relative flex h-[40rem] min-h-[calc(100vh-68px)] w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="h-full w-full"
            particleColor="#262626"
          />
        </div>
        <Image src="/img/hero.svg" alt="hero" width="844" height="720" />
      </div>

      {/* <div className="dark:bg-grid-white/[0.2] bg-grid-small-black/[0.2] relative flex  h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black"></div>
        <h1 className="text-4xl font-bold md:text-5xl">
          Fourth year software engineering student <br />
          focused on crafting modern digital <br /> experiences.
        </h1>
      </div> */}

      <div className="bg-grid-black/[0.05] bg-primary py-52 text-white">
        <div className="max-w-screen">
          <div className="mx-20 max-w-5xl lg:mx-auto">
            <h1 className="text-4xl font-bold md:text-5xl">
              Fourth year software engineering student <br />
              focused on crafting modern digital <br /> experiences.
            </h1>
          </div>
        </div>
      </div>
      <div className="py-20" id="about">
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
                  I&apos;m a fourth year software engineering student currently
                  studying at the University of Canterbury based in
                  Christchurch, New Zealand, with my graduation date currently
                  set to be November 2025. I have experience across a broad
                  range of subjects throughout my degree, including networking,
                  advanced security, full-stack development, computer vision,
                  and many more.
                  <br />
                  <br />
                  Combining my skills in design, engineering, and business I
                  work to craft elevating digital experiences with a unique
                  perspective. I have a passion for designing creative solutions
                  and am always looking for new opportunities to expand my
                  knowledge and skill set. I have a love of entrepreneurship and
                  am always interested in new business ventures.
                  <br />
                  <br /> Outside of software I like to keep myself busy with
                  numerous hobbies. From bouldering and climbing, snowboarding,
                  weightlifting, and cooking, I always have something to keep me
                  occupied. I also have a passion for travel and have been lucky
                  enough to visit many countries around the world, and I
                  can&apos;t wait to finish my studies so I can head overseas
                  and explore the world.
                </p>
                {/* <div className="my-5 flex justify-center lg:justify-start">
                  <button className="btn btn-primary rounded-3xl font-normal text-white">
                    More about me
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dot-white/[0.15] bg-neutral-900 py-20" id="projects">
        <h1 className="mb-16 text-center text-5xl font-extrabold text-white">
          PROJECTS
        </h1>
        <div className="flex justify-center">
          <div className="card px-10 lg:w-2/3 lg:px-0">
            <figure>
              <Image
                src="/img/flaresync.jpg"
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
      <div className="py-20" id="contact">
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
                <p className="text-neutral-400">
                  N.B.: Form is not yet functioning
                </p>
                <div className="flex justify-center">
                  <button className="btn btn-disabled btn-primary mt-5 rounded-3xl font-normal text-white">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div>
              <div className="">
                <h2 className="mb-10 text-3xl font-bold lg:hidden">
                  MY DETAILS
                </h2>
                <h3 className="text-xl font-bold ">Contact Details</h3>
                <IconText
                  src="/img/email.svg"
                  alt="Email"
                  text="stynesluke@gmail.com"
                  link="mailto:stynesluke@gmail.com"
                  width={20}
                  height={20}
                />
                <h3 className="mt-5 text-xl font-bold">My Socials</h3>
                {socialLinks.map((link, index) => (
                  <div key={index} className="py-2">
                    <IconText
                      src={link.src}
                      alt={link.alt}
                      text={link.text}
                      link={link.link}
                      width={20}
                      height={20}
                    />
                  </div>
                ))}
                <h3 className="mt-5 text-xl font-bold">Location</h3>
                <div className="py-2">
                  <div className="flex">
                    <Image
                      src="/img/location.svg"
                      alt="Location"
                      width={20}
                      height={20}
                    />
                    <p className="ml-2">Christchurch, New Zealand</p>
                  </div>
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
