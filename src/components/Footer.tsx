import React from "react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="font-raleway flex flex-col items-center font-light sm:flex-row justify-between bg-stone-200 p-10 md:p-16">
        <div className="mb-10 sm:mb-0">
          <h4 className="font-normal text-lg pb-2">Nana Moriyama</h4>
          <h4 className="text-xs flex justify-center">Front-End Developer</h4>
        </div>
        <div className="mb-10 sm:mb-0 flex flex-col items-center sm:items-start sm:text-left">
          <h4 className="font-normal text-lg pb-2">Contact</h4>
          <span>nana.moriyama.amsterdam@gmail.com</span>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-between mb-10 space-x-4">
            <a
              href="https://github.com/Nanamoriyama"
              className="text-slate-700 hover:text-black duration-300"
            >
              <FaGithubSquare className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nana-moriyama-5244b01b5/"
              className="text-slate-700 hover:text-black duration-300"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/nana226_/"
              className="text-slate-700 hover:text-black duration-300"
            >
              <FaInstagramSquare className="h-6 w-6" />
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
