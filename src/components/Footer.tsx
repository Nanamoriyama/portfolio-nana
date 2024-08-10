import Image from "next/image";
import React from "react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="font-raleway flex flex-col items-center font-light sm:flex-row justify-between bg-stone-200 p-10 md:p-16">
        <div className="mb-10 sm:mb-0 text-center">
          <a href="/">
            <Image
              src="/images/footer1.png"
              alt="Footer 1"
              height={240} // heightを240に設定してfooter2と揃える
              width={240} // widthを240に設定
              className="object-contain" // 画像が指定された範囲に収まるようにする
            />
          </a>
        </div>
        <div className="mb-10 sm:mb-0 flex flex-col items-center sm:items-start sm:text-left">
          <Image
            src="/images/footer2.png"
            width={300} // heightとwidthをfooter1と揃える
            height={300}
            alt="Footer 2"
            className="object-contain md:pt-6" // 画像が指定された範囲に収まるようにする
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-between mb-10 space-x-4">
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
          <p className="text-center">
            © 2024 Nana Moriyama
            <br />
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
