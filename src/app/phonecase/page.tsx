"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectComponent from "@/components/ProjectComponent";

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
          className="pt-6 mt-6 text-xl font-extralight px-2 hover:underline"
        >
          Home
        </Link>
      </div>

      <div className="m-4 flex flex-col md:flex-row justify-between">
        {/* 左側のセクション（テキスト） */}
        <div className="md:w-1/2 p-8">
          <h4 className="font-bold text-4xl mt-4 md:text-6xl">
            Make Your Custom Phone Case
          </h4>

          <div className="flex items-center mt-6 pt-4">
            <span>Web Page:</span>
            <a
              href="https://phone-case-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold md:whitespace-nowrap text-base ml-2 hover:underline"
            >
              https://phone-case-tau.vercel.app/
            </a>

            <a
              href="https://github.com/Nanamoriyama/phone-case"
              className="ml-2 hover:underline md:ml-4"
            >
              Code on GitHub
            </a>
          </div>

          <p className="mt-6 pt-8">
            In this project with youtube tutorial, I used Next.js for its easy
            routing system, SEO capabilities, and server-side rendering, which
            improve the app's loading speed and overall performance.
            <br />
            <br />I created an animated landing page, which was a great learning
            experience. The project includes a login system and a payment
            system, with authentication handled by Kinde. For managing image
            data, I utilized Cloudinary, ensuring efficient and scalable image
            storage and delivery. Additionally, I used Shadcn for a modern
            design and ease of use.
          </p>

          <ul className="mt-6 pt-6">
            <li>Date: July 2024</li>
            <li>Category: Front-end</li>
          </ul>
        </div>

        {/* 右側のセクション（画像） */}
        <div className="md:w-1/2 p-4 flex flex-wrap justify-center">
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/c1.png")}
          >
            <Image
              className="object-cover"
              src="/images/c1.png"
              alt="Screenshot 1"
              width={400}
              height={200}
            />
          </div>
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/c2.png")}
          >
            <Image
              className="object-cover"
              src="/images/c2.png"
              alt="Screenshot 2"
              width={400}
              height={200}
            />
          </div>
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/c3.png")}
          >
            <Image
              className="object-cover"
              src="/images/c3.png"
              alt="Screenshot 3"
              width={400}
              height={200}
            />
          </div>
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/c4.png")}
          >
            <Image
              className="object-cover"
              src="/images/c4.png"
              alt="Screenshot 4"
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
