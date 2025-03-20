"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectComponent from "@/components/ProjectComponent";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

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
      <div className="text-left">
        <Link
          href="/"
          className="pt-6 mt-6 text-xl font-extralight px-2 hover:underline "
        >
          Home
        </Link>
      </div>

      <div className="m-4 flex flex-col md:flex-row justify-between">
        {/* 左側のセクション */}
        <div className="md:w-1/2 p-8">
          <h4 className="font-semibold text-4xl mt-4 md:text-6xl">
            Private Event Bartender Website
          </h4>

          <div className="flex items-center mt-6 pt-4">
            <span className="">Web Page:</span>
            <a
              href="https://mimi-bartender.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold md:whitespace-nowrap text-base ml-2 hover:underline"
            >
              https://mimi-bartender.vercel.app/
            </a>

            <a
              href="https://github.com/Nanamoriyama/privateBartender/tree/main"
              className="ml-2 hover:underline md:ml-4"
            >
              Code on GitHub
            </a>
          </div>

          <p className="mt-6 pt-8">
            For this project, I implemented a cocktail search form that fetches
            drinks from a cocktail API, allowing users to search for various
            cocktail recipes.
            <br />
            <br />
            To manage server state and efficiently fetch data, I used React
            Query.
          </p>

          <ul className="mt-6 pt-6">
            <li>Date: May 2024</li>
            <li>Category: Front-end</li>
          </ul>
        </div>

        {/* 右側のセクション */}
        <div className="md:w-1/2 p-4 flex flex-wrap justify-center">
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/m1.png")}
          >
            <Image
              className="object-cover"
              src="/images/m1.png"
              alt="Screenshot 1"
              width={400}
              height={200}
            />
          </div>
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/m2.png")}
          >
            <Image
              className="object-cover"
              src="/images/m2.png"
              alt="Screenshot 2"
              width={400}
              height={200}
            />
          </div>
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
