"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Timeline from "@/components/Timeline";

const About = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflowY = "auto";
    return () => {
      document.body.style.overflowY = "hidden";
    };
  }, []);
  return (
    <>
      <div className="bg-black relative overflow-hidden bg-cover bg-center">
        <div className="fixed top-1 right-0 p-2 flex items-center gap-2 z-10 border border-stone-200 rounded-full hover:border-red-500">
          <Link
            href="/"
            className="text-2xl text-stone-200 font-thin px-2 rounded-full hover:bg-opacity-70 transition-colors duration-300"
          >
            Projects
          </Link>
        </div>
        {/* nanapの写真とオーバーレイ */}
        <div className="relative h-screen w-screen">
          {/* Horizontal and Vertical Lines */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="absolute h-full w-[1px] bg-gray-300"></div>
          </div>

          {/* Top Left: Location */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 flex justify-center items-center text-stone-200 hover:bg-red-400">
            <div className="flex justify-center flex-col items-center">
              <h2 className="text-xl font-thin p-8 whitespace-nowrap">
                アムステルダム
              </h2>
              <p>In Amsterdam</p>
            </div>
          </div>

          {/* Top Right: Contact */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 flex justify-center items-center text-stone-200 hover:bg-red-400">
            <div className="flex justify-center flex-col items-center text-center p-8 m-4">
              <h2 className="text-xl font-thin p-8 whitespace-nowrap">
                コンタクト
              </h2>
              <p className="text-xs md:text-sm break-words word-break:break-all">
                nana.moriyama.amsterdam
                <br className="md:hidden" />
                @gmail.com
              </p>
            </div>
          </div>

          {/* Bottom Left: Frontend */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 flex justify-center items-center text-stone-200 hover:bg-red-400 p-2 md:p-10">
            <div className="flex justify-center flex-col items-center">
              <h2 className="text-lg md:text-xl font-thin mb-2 text-center">
                Frontend
              </h2>
              <div className="flex flex-wrap justify-center text-xs md:text-sm items-center m-2 md:m-4">
                <div className="w-1/2 md:w-auto text-center space-x-1">
                  <span className="block md:inline">React.js</span>
                  <span className="block md:inline">Next.js</span>
                  <span className="block md:inline">TypeScript</span>
                  <span className="block md:inline">HTML5</span>
                  <span className="block md:inline">CSS3</span>
                </div>
                <div className="w-1/2 md:w-auto text-center space-x-1">
                  <span className="block md:inline">JavaScript (ES6+)</span>
                  <span className="block md:inline">TailwindCSS</span>
                  <span className="block md:inline">SCSS</span>
                  <span className="block md:inline">Redux</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right: Backend */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 flex justify-center items-center text-stone-200 hover:bg-red-400">
            <div className="flex justify-center flex-col items-center">
              <h2 className="text-lg  md:text-xl font-thin text-center mb-2">
                Backend
              </h2>
              <div className="flex flex-wrap justify-center  text-xs md:text-sm items-center m-1 md:m-4 ">
                <div className="w-1/2 md:w-auto text-center space-x-1">
                  <span className="block md:inline">Node.js</span>
                  <span className="block md:inline">Express</span>
                  <span className="block md:inline">Axios</span>
                  <span className="block md:inline">RESTful APIs</span>
                  <span className="block md:inline">JSON</span>
                  <span className="block md:inline">Git</span>
                  <span className="block md:inline">Firebase</span>
                </div>
                <div className="w-1/2 md:w-auto text-center space-x-1">
                  <span className="block md:inline">MongoDB</span>
                  <span className="block md:inline">Auth0</span>
                  <span className="block md:inline">Stripe</span>
                  <span className="block md:inline">OAuth</span>
                  <span className="block md:inline">Jest (unit testing)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 画像の下に流れるテキスト */}
        <div
          className="left-0 bottom-0 w-full text-center pointer-events-none"
          style={{
            transform: `translateX(-${scrollX * 0.5}px)`, // スクロールに基づいて左に動く
          }}
        >
          <span className="text-stone-200 text-6xl whitespace-nowrap md:text-9xl font-semibold font-serif">
            Nana <span className="text-red-400">Moriyama</span>
          </span>
        </div>
        <div className="relative flex flex-col justify-center items-center mt-10 mb-4">
          <div className="relative mb-8 w-full md:size-3/5">
            <Image
              src="/images/nanap1.png"
              className="object-cover"
              width={800}
              height={700}
              alt="Profile picture of Nana Moriyama"
              quality={100}
              style={{ width: "100%", height: "auto" }}
              priority
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </div>

        {/* タイムラインセクション */}
        <Timeline />
      </div>
      <Footer />
    </>
  );
};

export default About;
