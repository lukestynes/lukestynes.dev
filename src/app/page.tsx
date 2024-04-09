import Image from "next/image";
import Link from "next/link";

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
              alt="me"
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
                  <br /> Outside of software you’ll find me outdoors: up the
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
        <h1 className="mb-10 text-center text-5xl font-extrabold text-white">
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
      </div>
      <div className="py-20">
        <h1 className="mb-10 text-center text-5xl font-extrabold">
          GET IN TOUCH
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex-col justify-center">
              <p className="text-3xl font-medium">Got an interesting idea?</p>
              <p className="mb-10 text-3xl font-medium">Lets talk about it.</p>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered mb-2 w-full max-w-md text-lg text-primary placeholder-primary focus:outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered mb-2 w-full max-w-md text-lg text-primary placeholder-primary focus:outline-none"
              />
              <textarea
                className="textarea textarea-bordered mb-2 w-full max-w-md text-lg text-primary placeholder-primary focus:outline-none"
                placeholder="Your message"
              ></textarea>
              <div className="flex justify-center">
                <button className="btn btn-primary rounded-3xl font-normal text-white">
                  Send Message
                </button>
              </div>
            </div>
            <div>
              <div className="">
                <h3 className="text-lg font-bold ">Contact Details</h3>
                <p>stynesluke@gmail.com</p>
                <h3 className="mt-5 text-lg font-bold">My Socials</h3>
                <div className="flex">
                  <Image
                    className="mr-1"
                    src="/img/github.svg"
                    alt="GitHub Logo"
                    width="22"
                    height="22"
                  />
                  <p>GitHub</p>
                </div>
                <div className="flex">
                  <Image
                    className="mr-1"
                    src="/img/linkedin.svg"
                    alt="LinkedIn Logo"
                    width="22"
                    height="22"
                  />
                  <p>LinkedIn</p>
                </div>
                <div className="flex">
                  <Image
                    className="mr-1"
                    src="/img/instagram.svg"
                    alt="Instagram Logo"
                    width="22"
                    height="22"
                  />
                  <p>Instagram</p>
                </div>
                <div className="flex">
                  <Image
                    className="mr-1"
                    src="/img/spotify.svg"
                    alt="SpotifyLogo"
                    width="22"
                    height="22"
                  />
                  <p>Spotify</p>
                </div>
                <h3 className="mt-5 text-lg font-bold">Location</h3>
                <div className="flex">
                  <Image
                    className="mr-1"
                    src="/img/location.svg"
                    alt="Location Pin"
                    width="22"
                    height="22"
                  />
                  <p>Spotify</p>
                </div>
                <p>TIMEZONE HERE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
