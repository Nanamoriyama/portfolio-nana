"use client";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Timeline from "@/components/Timeline";

const About = () => {
  useEffect(() => {
    document.body.style.overflowY = "auto";
    return () => {
      document.body.style.overflowY = "hidden";
    };
  }, []);

  return (
    <>
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg3.png')" }}
      >
        <div className="text-stone-900 fixed top-0 right-0 pt-3 flex items-center transition-colors duration-300 hover:text-blue-800">
          <Link href="/" className="text-lg">
            Projects
          </Link>
          <MdKeyboardArrowRight className="text-2xl" />
        </div>

        {/* nanapの写真とオーバーレイ */}
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
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* 画像の上を流れるテキスト */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center overflow-hidden">
              <div className="marquee-text text-white text-4xl md:text-7xl font-semibold font-serif whitespace-nowrap">
                A Little Bit
                <span className="pl-10 text-blue-300"> About Me</span>
              </div>
            </div>
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
