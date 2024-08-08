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
      <div className="ml-12 pt-8 md:pl-8">
        <Image
          className="object-cover"
          src="/images/snake-1.png"
          alt="Snake Logo"
          width={100}
          height={100}
        />
      </div>

      <div className="m-4 flex justify-between">
        <div>
          <h4 className="font-light text-3xl ml-8 mt-4 md:text-4xl">
            Make Your Custom Phone Case
          </h4>

          <br />
          <div className="flex items-center ml-8 md:m-8">
            <div className="">
              <Image src="/images/link.png" width={40} height={0} alt="" />
            </div>
            <a
              href="https://phone-case-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold md:text-base"
            >
              https://phone-case-tau.vercel.app/
            </a>

            <a
              href="https://github.com/Nanamoriyama/phone-case"
              className="github-icon hover:duration-300"
            >
              <Image
                src="/images/githubicon.png"
                height={60}
                width={60}
                alt=""
              />
            </a>
          </div>
          <p className="m-6 p-4 md:p-14">
            In this project, I used Next.js for its easy routing system, SEO
            capabilities, and server-side rendering, which improve the app's
            loading speed and overall performance.
            <br />
            <br />I created an animated landing page, which was a great learning
            experience. The project includes a login system and a payment
            system, with authentication handled by Kinde. For managing image
            data, I utilized Cloudinary, ensuring efficient and scalable image
            storage and delivery. Additionally, I used Shadcn for a modern
            design and ease of use.
          </p>
          <ul className="ml-6 p-6">
            <li>Date: May 2024</li>
            <li>Category: Front-end(little Backend)</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
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
