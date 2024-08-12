import React from "react";
import Link from "next/link";

interface VideoBackgroundProps {
  desktopSrc: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  desktopSrc,

  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <video
        className={`object-cover w-full h-full`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        {/* デスクトップ用のビデオ */}
        <source
          src="/degital.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        {/* 代替テキスト */}
        Your browser does not support the video tag.
      </video>

      {/* メインコンテンツ (デスクトップ用) */}
      <div className="absolute inset-0 p-4 bg-opacity-70 hidden md:block">
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
    </div>
  );
};

export default VideoBackground;
