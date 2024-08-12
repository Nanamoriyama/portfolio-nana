"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoBackground from "./videoBackground";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // 0.5秒後にフェードイン開始
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative overflow-hidden h-screen transition-opacity duration-800 ease-in-out ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
      {/* 背景ビデオ */}
      <div className="absolute top-0 left-0 w-full h-full">
        <VideoBackground
          desktopSrc="/degital.mp4"
          className="h-1/2 md:h-full"
        />
      </div>

      {/* 下半分の背景カラー */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-300 via-transparent to-transparent md:hidden"></div>

      {/* Centered Scene Component */}
      <div className="absolute inset-0 flex mt-16 pt-10 items-center justify-center z-10 pointer-events-none">
        <Scene />
      </div>

      {/* メインコンテンツ (デスクトップ・モバイル共通) */}
      <div className="relative p-4 bg-opacity-70 z-20">
        <div className="py-16 font-light font-serif bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-slate-50 via-pink-500 to-slate-50 bg-size-200%">
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

      {/* 中央のテキストコンテンツ (Born in Japan) */}
      <div className="font-raleway absolute bottom-40 left-1/2 transform -translate-x-1/2 text-left bg-clip-text whitespace-nowrap text-stone-800 md:text-stone-200 bg-size-200% z-20">
        <p className="text-base capitalize tracking-wide">
          Born in Japan <br />
          In Amsterdam📍 <br />
          With all the possibilities of our time, <br />I want to learn new
          technologies
          <br /> and bring inspiring websites to life
        </p>
      </div>

      {/* 画面一番下の中央に配置されたリンク */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-x-4 z-20">
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
