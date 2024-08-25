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
      <div className="m-4 pt-8 flex justify-center items-center">
        <Image
          className=""
          src="/images/logo.png"
          alt="Logo"
          width={140}
          height={140}
        />
        <h4 className="font-light text-3xl m-4 md:text-4xl">
          Fashion Ecommerce Website
        </h4>
      </div>

      <hr className="border-t-1 border-gray-300 my-4 mx-10" />
      <div className="md:ml-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Current Project" }]}
        />
      </div>
      <hr className="border-t-1 border-gray-300 my-4 mx-10" />

      <div className="mt-8 flex justify-center">
        <div className="flex flex-col items-start">
          <div className="text-xs md:text-base">website</div>
          <div className="flex items-center">
            <a
              href="https://fashion-web-practice.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold md:text-base"
            >
              https://fashion-web-practice.vercel.app/
            </a>
            <a
              href="https://github.com/Nanamoriyama/fashion-web"
              className="github-icon hover:duration-300 ml-6"
            >
              <Image
                src="/images/githubicon.png"
                height={50}
                width={50}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="m-6 p-4 md:p-14">
        <p>
          In my Next.js project, I built a responsive e-commerce site that works
          also well on mobile devices. The site includes all the essential
          features of an e-commerce platform, such as a wishlist, cart system,
          sorting options, and a payment system powered by Stripe.
          <br />
          To manage the state, I used Redux for the shopping cart, which
          involves more complex logic. For the wishlist, I chose useContext,
          which is more suited for simpler state management.
          <br />
          <br />
          Additionally, I implemented a login system and integrated Stripe for
          secure payments. This project allowed me to balance complexity and
          scalability across different components of the app.
        </p>
        <ul className="ml-6 p-6">
          <li>Date: July 2024</li>
          <li>Category: Front-end</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/d1.png")}
        >
          <Image
            className="object-cover"
            src="/images/d1.png"
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
            src="/images/d2.png"
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
            src="/images/d3.png"
            alt="Screenshot 3"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/d4.png")}
        >
          <Image
            className="object-cover"
            src="/images/d4.png"
            alt="Screenshot 4"
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
