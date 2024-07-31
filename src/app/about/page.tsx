"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  return (
    <>
      {/* 3/4 screen height text section with slide-in animation */}
      <div className="mt-20 pt-20 h-3/4 flex flex-col justify-center items-center text-stone-700 text-6xl space-y-4">
        <div className="text-center animation-slide-in">
          <span className="block animate-slide-in delay-1">A Little Bit</span>
          <span className="block text-green-300 animate-slide-in delay-2">
            About Me
          </span>
          <p className="block animate-slide-in delay-1 font-light text-sm">
            A short recollection of my adventures, struggles, <br />
            and precious moments that made me into who I am today.
          </p>
        </div>
      </div>

      {/* Content section with image and text */}
      <section className="bg-white py-12 font-serif">
        <div className="mt-20 align-element grid md:grid-cols-2 items-center gap-16">
          <div className="flex justify-center">
            <Image
              src="/images/icon2.png"
              className="w-72 h-72 rounded-full object-cover"
              width={270}
              height={270}
              alt="Profile picture of Nana Moriyama"
            />
          </div>
          <article className="text-left p-4 md:mr-6">
            Hi!
            <br />
            I'm originally from Osaka, Japan, but I've been calling the
            Netherlands my home for the last 8 years. In this time, I founded my
            own Japanese language school, helped launch two restaurants, and
            managed them with the owners.
            <br></br>
            <br></br>
            I've always been fascinated by how websites work, which led me to
            dive into web development. I kicked off my tech journey with the
            Udemy Web Developer Bootcamp in 2023, where I learned HTML, CSS, and
            JavaScript. That’s where I fell in love with making things that
            people can actually interact with online. On the backend, I've
            worked with Node.js and Express. I've also explored React,
            TypeScript, Next.js, AWS, MongoDB, Auth0, Firebase, and Redux to
            round out my skills. I believe that UX is key to gaining a
            competitive advantage and realize this requires incorporating
            cutting-edge technologies. I am continuously learning to master the
            field.
            <br></br>
            <br></br>
            In addition, to improve my problem-solving skills, I practice
            JavaScript coding problems on LeetCode daily. Whether I'm making
            user-friendly front ends or managing behind the scenes, I love
            putting all these tools to use to bring awesome ideas to life. Let’s
            make something great together!
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
