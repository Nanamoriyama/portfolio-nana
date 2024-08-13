"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import VideoBackground from "./videoBackground";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // Background image fade-in control
  const [isLogoVisible, setIsLogoVisible] = useState(false); // Logo fade-in control

  useEffect(() => {
    // Shorten the loading time to 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsHeroVisible(true); // Display Hero as soon as loading ends
    }, 2000);

    const logoTimer = setTimeout(() => {
      setIsLogoVisible(true); // Show logo with fade-in effect
    }, 500); // Logo fade-in starts after 0.5 seconds

    if (isHeroVisible) {
      const imageTimer = setTimeout(() => {
        setIsImageVisible(true); // Fade in background image shortly after Hero becomes visible
      }, 100); // Slight delay before the fade-in starts

      return () => clearTimeout(imageTimer);
    }

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(logoTimer);
    };
  }, [isHeroVisible]);

  return (
    <div className="relative w-full h-full">
      {/* Hero content */}
      <div
        className={`relative overflow-hidden h-screen transition-opacity duration-[900ms] ease-in-out ${
          isHeroVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background Video */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <VideoBackground
            desktopSrc="/degital.mp4"
            mobileSrc="/degitalmobile.mp4"
            className="h-1/3 md:h-full"
          />
        </div>

        {/* Lower half background color */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-300 via-transparent to-transparent md:hidden"></div>

        {/* Centered Scene Component with Mouse Scroll Icon */}
        <div className="absolute inset-0 flex mt-16 pt-10 items-center justify-center z-10 pointer-events-none">
          <Scene />
        </div>

        {/* Main content (common for desktop and mobile) */}
        <div className="relative p-4 bg-opacity-70 z-20">
          <div className="py-10 font-light font-serif bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-slate-50 via-pink-500 to-slate-50 bg-size-200%">
            <div className="align-element grid md:grid-cols-2 items-start justify-start gap-8">
              <article className="md:ml-8 md:mt-2">
                <h1 className="text-2xl font-extralight tracking-wider">
                  Nana Moriyama
                </h1>
                <div className="mt-2 text-sm capitalize tracking-wide">
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

        {/* Central text content (Born in Japan) */}
        <div className="font-raleway absolute bottom-40 left-1/2 transform -translate-x-1/2 text-left bg-clip-text whitespace-nowrap text-stone-800 md:text-stone-200 bg-size-200% z-20">
          <p className="text-base capitalize tracking-wide">
            Born in Japan <br />
            In Amsterdam📍 <br />
            With all the possibilities of our time, <br />I want to learn new
            technologies
            <br /> and bring inspiring websites to life
          </p>
        </div>

        {/* Links positioned at the bottom center */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-x-4 z-20">
          <a href="https://github.com/Nanamoriyama" className="github-icon">
            <Image
              src="/images/githubicon.png"
              className=""
              width={80}
              height={80}
              alt="GitHub"
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
              alt="LinkedIn"
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
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      {/* Loading Screen */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 bg-slate-900 transition-transform duration-[1000ms] ease-in-out transform ${
          !isLoading ? "translate-y-[-100%]" : "translate-y-0"
        }`}
      >
        {/* Fade-in for Logo */}
        <div
          className={`transition-opacity duration-[1500ms] ease-in-out ${
            isLogoVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
