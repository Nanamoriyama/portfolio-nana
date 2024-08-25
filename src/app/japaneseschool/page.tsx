"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Footer from "@/components/Footer";

import ProjectComponent from "@/components/ProjectComponent";
import Breadcrumb from "@/components/Breadcrumb";

const Page = () => {
  useEffect(() => {
    // ページがマウントされたときにスクロールを有効化
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "auto";

    return () => {
      // ページがアンマウントされたときにグローバル設定に戻す
      document.body.style.overflowY = "hidden";
      document.body.style.overflowX = "hidden";
    };
  }, []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full mt-8">
        <Image
          src="/images/moriyamalogo.png"
          alt="Moriyama Logo"
          width={100}
          height={100}
        />
        <div className="font-light text-sm md:text-2xl mt-4 text-center">
          Japanese Language School Moriyama
        </div>
      </div>

      <hr className="border-t-1 border-gray-300 my-4 mx-10" />
      <div className="md:ml-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Current Project" }]}
        />
      </div>
      <hr className="border-t-1 border-gray-300 my-4 mx-10" />
      <br />
      <div className="flex justify-center">
        <div className="flex flex-col items-start ml-4 md:ml-12 mb-8">
          <span className="text-xs">Web page</span>
          <div className="flex items-center">
            <a
              href="https://moriyama.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold md:text-base"
            >
              https://moriyama.vercel.app/
            </a>
            <a
              href="https://github.com/Nanamoriyama/JapaneseSchool"
              className="github-icon hover:duration-300 ml-2"
            >
              <Image
                src="/images/githubicon.png"
                height={60}
                width={60}
                alt="GitHub Icon"
              />
            </a>
          </div>
        </div>
      </div>

      <p className="m-6 p-4 md:p-14">
        Next.js and Typescript Project.
        <br />I made a website for my own Japanese language school.
        <br />
        The logo transition is implemented using CSS for smooth animations,
        deliberately avoiding the use of JavaScript-heavy methods.
        <br /> <br />
        I designed and implemented a dynamic loading screen using React and CSS
        transitions. This component plays a crucial role in improving the user
        experience by providing visual feedback during loading times,
        particularly when transitioning between different states.
        <br />
        <br />
        Later I am planning to add more pages for Blog, language & culture Quiz
        and word dictionary by different levels.
      </p>
      <ul className="ml-6 p-6">
        <li>Date: May 2024</li>
        <li>Category: Front-end(little Backend)</li>
      </ul>

      <div className="flex flex-wrap justify-evenly">
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/mphone.png")}
        >
          <Image
            className="object-cover"
            src="/images/mphone.png"
            alt="Screenshot 1"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/mo1.png")}
        >
          <Image
            className="object-cover"
            src="/images/mo1.png"
            alt="Screenshot 2"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/mo2.png")}
        >
          <Image
            className="object-cover"
            src="/images/mo2.png"
            alt="Screenshot 2"
            width={400}
            height={200}
          />
        </div>
      </div>
      <div className="mt-10">
        <ProjectComponent />
      </div>
      {/* モーダル */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="object-cover"
            />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-stone-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Page;
