"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaGithubSquare } from "react-icons/fa";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="m-4 pt-8 md:pl-8">
        <Image
          className="object-cover"
          src="/images/logo.svg"
          alt="WIF Logo"
          width={280}
          height={200}
        />
      </div>

      <div className="m-4 flex justify-between">
        <div>
          <h4 className="font-light text-3xl m-4 md:text-4xl">
            Fashion Website
          </h4>
          <p className="m-4 text-xs md:ml-6 md:mb-0 md:text-base">
            To practice UI/UX, I choose the popular fashion brand Dior website
            for practice
          </p>
          <br />
          <div className="flex items-center m-4 md:m-6">
            <a
              href="https://fashion-web-practice.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold md:text-base"
            >
              https://fashion-web-practice.vercel.app/
            </a>
            <span className="ml-2 h-2.5 w-2.5 rounded-full bg-green-500"></span>
            <a
              href="https://github.com/Nanamoriyama/fashion-web"
              className="text-slate-700 hover:text-black duration-300"
            >
              <FaGithubSquare className="h-6 w-6 ml-6" />
            </a>
          </div>
          <p className="m-6 p-4 md:p-14">
            In my Next.js project, I built a responsive e-commerce site for a
            fashion brand that works also well on mobile devices. The site
            includes all essential features for an e-commerce platform, such as
            a wishlist, cart system, and payment system using Stripe.
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
