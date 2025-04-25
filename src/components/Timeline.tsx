"use client";
import React, { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-text span");

      elements.forEach((element, index) => {
        const el = element as HTMLElement;
        const rect = el.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        if (rect.top < screenHeight) {
          // スクロール位置に応じて色をフェードイン
          const progress = Math.min(
            1,
            Math.max(0, (screenHeight - rect.top) / screenHeight)
          );
          el.style.color = `rgba(255, 255, 255, ${progress})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-start ml-12">
        {/* 中央の縦線 */}
        <div className="absolute w-1 bg-blue-300 h-full left-0 animate-pulse-line"></div>

        {/* 各タイムラインエントリー */}
        <div className="mb-12 flex flex-col md:flex-row items-start w-full">
          <div className="relative flex items-center">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="ml-5 pt-5 flex flex-col md:flex-row md:items-start w-full md:pt-16">
            <div>
              <h2 className="text-4xl font-bold text-stone-400 md:pl-14">
                2017
              </h2>
              <p className="p-2 pr-10 mr-2 md:p-14 fade-text text-3xl">
                {"After graduating from university, I decided to move to the Netherlands. I was teaching Japanese and working as a restaurant operations manager in Utrecht. I created websites for my language school led me to dive into web development."
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} style={{ marginRight: "0.5rem" }}>
                      {word}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-start w-full">
          <div className="relative flex items-center">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="ml-5 pt-5 flex flex-col md:flex-row md:items-start w-full md:pt-16">
            <div>
              <h2 className="text-4xl font-bold text-stone-400 md:pl-14">
                2023
              </h2>
              <p className="p-2 pr-8 mr-2 md:p-14 fade-text text-3xl">
                {"I began my tech journey with the Web Developer Bootcamp, where I learned the fundamentals of web development. Since then, I’ve been continuously learning and exploring the field. I really enjoy turning cool ideas into real websites and interactive experiences. Bringing creative concepts to life is something I’m passionate about! And I love sharing and talking about those ideas with others. I'm always looking for ways to stay productive and keep improving my skills every day."
                  .split(" ")
                  .map((word, index) => (
                    <span key={index} style={{ marginRight: "0.5rem" }}>
                      {word}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-text span {
          transition: color 0.3s ease;
          color: rgba(255, 255, 255, 0); /* 初期色は透明 */
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default Timeline;
