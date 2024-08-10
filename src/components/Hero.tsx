import React from "react";
import Link from "next/link";
import TextTypingMultiple from "../components/TextTypingMultiple";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  const gradientStyle = {
    background:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="relative overflow-hidden h-screen">
      {/* 背景ビデオ */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="object-cover w-full h-1/2 md:h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* デスクトップ用のビデオ */}
          <source
            src="/hero1.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
          {/* モバイル用のビデオ */}
          <source
            src="/dolphinmobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
          {/* 代替テキスト */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 下半分の背景カラー */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-300 via-transparent to-transparent md:hidden"></div>

      {/* モバイル表示用のテキスト */}
      <div className="md:hidden absolute pr-4 top-1/2 w-full z-20">
        <TextTypingMultiple
          texts={["こんにちは", "Hoi", "Hola", "Bonjour", "नमस्ते", "வணக்கம்"]}
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative p-4 bg-opacity-70">
        <div className="py-16 font-light font-serif bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-slate-900 via-slate-200 to-slate-900 bg-size-200%">
          <div className="align-element grid md:grid-cols-2 items-start justify-start gap-8">
            <article className="md:ml-8 md:mt-2">
              <h1 className="text-3xl font-extralight tracking-wider">
                Nana Moriyama
              </h1>
              <div className="mt-4 text-sm capitalize tracking-wide">
                <div className="pl-3 text-base">Front-End Developer</div>
              </div>

              <ul className="font-raleway mt-4 p-2">
                <li className="p-2">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="p-2">
                  <Link href="/about">About Me</Link>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      {/* 右下のテキストコンテンツ */}
      <div className="font-raleway absolute bottom-20 right-0 mb-10 mr-4 text-right bg-clip-text text-stone-800 md:text-stone-200 bg-size-200% z-20">
        <p className="text-base capitalize tracking-wide">
          Born in Japan <br />
          In Amsterdam📍 <br />
          With all the possibilities of our time, <br />I want to learn new
          technologies
          <br /> and bring inspiring websites to life
        </p>
      </div>

      {/* 画面一番下の中央に配置されたリンク */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-x-4 z-20">
        <a href="https://github.com/Nanamoriyama" className="github-icon">
          <Image
            src="/images/githubicon.png"
            className=""
            width={80}
            height={80}
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nana-moriyama-5244b01b5/"
          className="linkedin-icon"
        >
          <Image
            src="/images/linkedin.png"
            className=""
            width={80}
            height={80}
            alt=""
          />
        </a>
        <a
          href="https://www.instagram.com/nana226_/"
          className="instagram-icon"
          style={gradientStyle}
        >
          <Image
            src="/images/instagramicon.png"
            className=""
            width={80}
            height={80}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
