"use client";
import React from "react";
import Link from "next/link";
import TextTyping from "../components/TypingAnimation";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      {/* 背景動画 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/hero1.mp4"
        autoPlay
        loop
        muted
      />

      {/* メインコンテンツ */}
      <div className="relative p-4 bg-opacity-70">
        <div className="py-16 font-light font-serif bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-slate-900 via-slate-200 to-slate-900 bg-size-200%">
          <div className="align-element grid md:grid-cols-2 items-start justify-start gap-8">
            <article className="md:ml-8 md:mt-2">
              <h1 className="text-3xl font-extralight tracking-wider">
                Nana Moriyama
              </h1>
              <div className="mt-4 text-sm capitalize tracking-wide">
                <TextTyping text="Front-End Developer" />
              </div>

              <ul className="mt-4 p-2">
                <li className="p-2">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="p-2">
                  <Link href="/about">About Nana</Link>
                </li>
                <li className="p-2">
                  <Link href="/info">Info</Link>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      {/* 右下のテキストコンテンツ */}
      <div className="absolute bottom-0 right-0 mb-4 mr-4 text-right bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-slate-700 via-slate-300 to-slate-900 bg-size-200% z-20">
        <p className="text-base capitalize tracking-wide">
          Born in Japan <br />
          In Amsterdam📍 <br />
          With all the possibilities of our time, <br />I want to learn new
          technologies
          <br /> and bring inspiring creations to life
        </p>
        <div className="flex gap-x-4 mt-4 justify-end">
          <a href="https://github.com/Nanamoriyama">
            <FaGithubSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/nana-moriyama-5244b01b5/">
            <FaLinkedin className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
          </a>
          <a href="https://www.instagram.com/nana226_/">
            <FaInstagramSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
