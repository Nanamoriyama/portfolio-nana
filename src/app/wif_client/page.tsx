"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectComponent from "@/components/ProjectComponent";
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
          className="pt-6 mt-6 text-xl font-extralight px-2 hover:underline"
        >
          Home
        </Link>
      </div>

      <div className="m-4 flex flex-col md:flex-row justify-between">
        {/* 左側のセクション（テキスト） */}
        <div className="md:w-1/2 p-8">
          <h4 className="font-bold text-4xl mt-4 md:text-6xl">
            B2B World in Freelance
          </h4>

          <div className="flex items-center mt-6 pt-4">
            <span>Web Page:</span>
            <a
              href="https://wif.ib-tec.co.jp/client"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold md:whitespace-nowrap text-base ml-2 hover:underline"
            >
              https://wif.ib-tec.co.jp/client
            </a>
          </div>

          <p className="mt-6 pt-8 font-medium">
            The freelance website - ReactJS, Next.js and Hubspot for form
            collection and data management. <br />
            Both clients B2B and individual candidates forms now go to HubSpot.
          </p>
          <br />
          <p>
            I built a responsive, pixel-perfect multi-step form using React and
            Next.js. The form is divided into multiple stages (Personal Info,
            Preferences, Experience), with navigation handled through page state
            and conditional rendering. Once submitted, it shows the confirmation
            page. <br /> Form data is sent to HubSpot using their API, providing
            a smooth experience.
          </p>

          <ul className="mt-6 pt-6">
            <li>Date: October 2024</li>
            <li>Category: Fullstack</li>
          </ul>
        </div>

        {/* 右側のセクション（画像） */}
        <div className="md:w-1/2 p-4 flex flex-wrap justify-center">
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/d1.png")}
          >
            <Image
              className="object-cover"
              src="/images/wifclient1.png"
              alt="Screenshot 1"
              width={400}
              height={200}
            />
          </div>
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/d2.png")}
          >
            <Image
              className="object-cover"
              src="/images/wifclient2.png"
              alt="Screenshot 2"
              width={400}
              height={200}
            />
          </div>
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/d3.png")}
          >
            <Image
              className="object-cover"
              src="/images/wifclient3.png"
              alt="Screenshot 3"
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
