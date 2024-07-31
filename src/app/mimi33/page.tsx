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
          src="/images/mimilogo.png"
          alt="Mimi Logo"
          width={100}
          height={100}
        />
      </div>

      <div className="m-4 flex justify-between">
        <div>
          <h4 className="font-light text-3xl ml-8 mt-4 md:text-4xl">
            Private Event Bartender Website
          </h4>

          <br />
          <div className="flex items-center ml-8 md:m-8">
            <a
              href="https://mimi33.nanamoriyama.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold md:text-base"
            >
              https://mimi33.nanamoriyama.com/
            </a>
            <span className="ml-2 h-2.5 w-2.5 rounded-full bg-green-500"></span>
            <a
              href="https://github.com/Nanamoriyama/privateBartender/tree/main"
              className="text-slate-700 hover:text-black duration-300"
            >
              <FaGithubSquare className="h-6 w-6 ml-6" />
            </a>
          </div>
          <p className="m-6 p-4 md:p-14">
            For this project, I utilized React Toastify to provide users with
            elegant notifications and alerts, enhancing the user experience by
            displaying success, error, and informational messages seamlessly.
            Additionally, I implemented a cocktail search form that fetches
            drinks from an API, allowing users to search for and discover
            various cocktail recipes.
            <br />
            <br />
            To manage server state and efficiently fetch data, I incorporated
            React Query. This library handles data fetching, caching,
            synchronization, and background updates, ensuring that the
            application's data is always up-to-date and providing a smooth,
            responsive interface. This combination of technologies not only
            streamlined the development process but also significantly improved
            the overall performance and user experience of the application.
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
