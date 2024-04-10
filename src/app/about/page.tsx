import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <div className="min-h-[calc(100vh-68px)] py-20">
        <div className="max-w-screen">
          <h1 className="mb-10 text-center text-5xl font-extrabold">
            ABOUT ME
          </h1>
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
                    I’m a fourth year software engineering student currently
                    studying at the University of Canterbury based in
                    Christchurch, New Zealand, with my graduation date currently
                    set to be November 2025. I have experience across a broad
                    range of subjects throughout my degree, including
                    networking, advanced security, full-stack development,
                    computer vision, and many more.
                    <br />
                    <br />
                    Combining my skills in design, engineering, and business I
                    work to craft elevating digital experiences with a unique
                    perspective. I have a passion for designing creative
                    solutions and am always looking for new opportunities to
                    expand my knowledge and skill set. I have a love of
                    entrepreneurship and am always interested in new business
                    ventures.
                    <br />
                    <br /> Outside of software I like to keep myself busy with
                    numerous hobbies. From bouldering and climbing,
                    snowboarding, weightlifting, and cooking, I always have
                    something to keep me occupied. I also have a passion for
                    travel and have been lucky enough to visit many countries
                    around the world, and I can't wait to finish my studies so I
                    can head overseas and explore the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
