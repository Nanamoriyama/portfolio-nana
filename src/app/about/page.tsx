"use client";
import Footer from "@/components/Footer";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div
        className="overflow-hidden relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg3.png')" }}
      >
        <div className="text-5xl md:text-6xl font-semibold font-serif animate-slide-in-left text-center mt-10">
          A Little Bit <br />
          <span className="text-blue-900 pl-10"> About Me</span>
        </div>

        <div className="h-screen flex flex-col justify-center items-center md:flex-row md:justify-between">
          <div className="block md:hidden animate-slide-in-left">
            <Image
              src="/images/nanap1.png"
              className="object-cover mb-4 mr-6 mt-6"
              width={280}
              height={280}
              alt="Profile picture of Nana Moriyama"
              quality={100}
            />
          </div>

          <div className="hidden md:flex md:w-1/4 flex-col justify-center items-center space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/images/nanap1.png"
                className="object-cover ml-2"
                width={300}
                height={300}
                alt="Profile picture of Nana Moriyama"
                quality={100}
              />
            </div>
          </div>

          <div className="flex-grow w-full md:w-1/2 overflow-y-auto p-6 md:p-10 md:mt-5">
            <div className="align-element">
              <article className="text-left leading-relaxed text-lg md:text-xl text-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Hi!</h2>
                <p>
                  I'm originally from Osaka, Japan, but I've been calling the
                  Netherlands my home for the last 8 years. In this time, I
                  founded my own Japanese language school, helped launch two
                  Japanese restaurants in Utrecht, and managed them with the
                  owners.
                </p>
                <br />
                <p>
                  I've always been curious how I can make websites for my
                  Japanese school, which led me to dive into web development. I
                  started my tech journey with the Udemy Web Developer Bootcamp
                  in 2023, where I learned HTML, CSS, JavaScript, node.js, Json,
                  axios, and express.js. That’s where I fell in love with making
                  things that people can actually interact with online. I've
                  also explored React, TypeScript, Next.js, AWS, MongoDB, Auth0,
                  Firebase, and Redux to round out my skills.
                </p>
                <br />
                <p>
                  I believe that UX is key to gaining a competitive advantage
                  and realize this requires incorporating cutting-edge
                  technologies. I am continuously learning the field. In
                  addition, to improve my problem-solving skills, I do LeetCode
                  daily.
                </p>
                <br />
                <p className="mb-4">
                  I love putting all these tools to use to bring awesome ideas
                  to life. Let’s make something great together!
                </p>
              </article>
            </div>
          </div>

          <div className="hidden md:flex md:w-1/4 flex-col justify-center items-center space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/images/cat3.png"
                className="object-cover"
                width={300}
                height={300}
                alt="Profile picture of Nana Moriyama"
              />
              <div className="hidden text-right text-3xl font-base leading-relaxed text-stone-800 animate-slide-in-up">
                <span className="block pr-10">
                  こ<br />ん<br />に<br />ち<br />は
                </span>
                <span className="block mt-6 pr-24">
                  森<br />山<br />で<br />す
                </span>
              </div>
              <div className="text-right text-3xl font-base leading-relaxed text-stone-800 animate-slide-in-up">
                <span className="block pr-10">
                  こ<br />ん<br />に<br />ち<br />は
                </span>
                <span className="block mt-6 pr-24">
                  森<br />山<br />で<br />す
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
