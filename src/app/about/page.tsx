"use client";
import Footer from "@/components/Footer";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* 3/4 screen height text section with slide-in animation */}
      <div className="h-3/4 flex flex-col justify-center items-center space-y-4">
        <div className="text-center flex mb-2">
          <span className="flex">
            <span className="pt-10 mt-5 hidden lg:block">
              <Image src="/images/about4.png" width={300} height={300} alt="" />
            </span>
            <Image
              src="/images/about1.png"
              className="w-46 h-46 md:w-96 md:h-96"
              width={400}
              height={400}
              alt=""
            />
          </span>
          <span className="flex">
            <Image
              src="/images/about3.png"
              className="w-46 h-46 md:w-96 md:h-96"
              width={400}
              height={400}
              alt=""
            />
          </span>
        </div>
      </div>

      {/* Content section with image and text */}
      <section className="animation-slide-in font-serif">
        <div className="align-element grid md:grid-cols-2 items-start">
          <div className="flex flex-col md:mt-6 items-center">
            <Image
              src="/images/icon2.png"
              className="w-72 h-72 rounded-full object-cover"
              width={260}
              height={260}
              alt="Profile picture of Nana Moriyama"
            />
            <Image
              src="/images/podu1.png"
              className="w-54 h-54 rounded-full object-cover mt-4 pb-4 pl-3 ml-12 hidden md:block transform translate-x-12"
              width={200}
              height={200}
              alt="Profile picture of Nana Moriyama"
            />
          </div>
          <article className="text-left p-6 md:mr-4">
            Hi!
            <br />
            I'm originally from Osaka, Japan, but I've been calling the
            Netherlands my home for the last 8 years. In this time, I founded my
            own Japanese language school, helped launch two Japanese restaurants
            in Utrecht, and managed them with the owners.
            <br />
            <br />
            I've always been curious how I can make websites for my Japanese
            school, which led me to dive into web development. I started my tech
            journey with the Udemy Web Developer Bootcamp in 2023, where I
            learned HTML, CSS, JavaScript, node.js,Json, axios and express.js.
            That’s where I fell in love with making things that people can
            actually interact with online. I've also explored React, TypeScript,
            Next.js, AWS, MongoDB, Auth0, Firebase, and Redux to round out my
            skills. I believe that UX is key to gaining a competitive advantage
            and realize this requires incorporating cutting-edge technologies. I
            am continuously learning the field.
            <br />
            <br />
            In addition, to improve my problem-solving skills, I do LeetCode
            daily. <br />I love putting all these tools to use to bring awesome
            ideas to life. Let’s make something great together!
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
