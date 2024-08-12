import Image from "next/image";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-stone-300">
      <div className="font-raleway flex flex-col md:flex-row items-center justify-between p-4 md:p-10 min-h-screen md:min-h-0 md:h-auto relative">
        {/* 左側のコンテンツ */}
        <div className="mb-10 md:mb-0 text-center flex-1 flex justify-center">
          <a href="/" className="group">
            <Image
              src="/images/footer1.png"
              alt="Footer 1"
              height={240}
              width={240}
              className="object-contain transform transition-transform duration-300 group-hover:-translate-y-2"
            />
          </a>
        </div>

        {/* 中央のコンテンツ */}
        <div className="mb-10 md:mb-0 flex flex-col items-center md:items-start md:text-left flex-1 md:ml-10">
          <Image
            src="/images/footer2.png"
            width={300}
            height={300}
            alt="Footer 2"
            className="object-contain md:pt-6"
          />
        </div>

        {/* 右側のコンテンツ */}
        <div className="flex flex-col items-center space-y-4 flex-1">
          <div className="flex justify-center mb-10 space-x-4">
            <a
              href="https://github.com/Nanamoriyama"
              className="text-slate-700 hover:text-black duration-300"
            >
              <FaGithubSquare className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/nana-moriyama-5244b01b5/"
              className="text-slate-700 hover:text-black duration-300"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* コピーライトを画面下部に配置 */}
      <p className="text-center p-4 font-extralight bg-stone-300">
        ©NanaMoriyama
      </p>
    </div>
  );
};

export default Footer;
