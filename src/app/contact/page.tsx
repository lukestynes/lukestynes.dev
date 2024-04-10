import Clock from "@/components/clock";
import IconText from "@/components/icontext";
import Image from "next/image";

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

export default function ContactPage() {
  return (
    <main className="flex min-h-[calc(100vh-68px)] items-center justify-center py-20">
      <div>
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
