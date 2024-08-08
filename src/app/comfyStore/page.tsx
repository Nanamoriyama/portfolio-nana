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
          src="/images/2.png"
          alt="Comfy Logo"
          width={100}
          height={100}
        />
      </div>

      <div className="m-4 flex justify-between">
        <div>
          <h4 className="font-light text-3xl ml-8 mt-4 md:text-4xl">
            Furniture Shop
          </h4>

          <br />
          <div className="flex items-center ml-8 md:m-8">
            <div className="">
              <Image src="/images/link.png" width={40} height={0} alt="" />
            </div>
            <a
              href="https://store.nanamoriyama.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold md:text-base"
            >
              https://store.nanamoriyama.com/
            </a>

            <a
              href="https://github.com/Nanamoriyama/comfy-store"
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
            In this project, I used React, Vite, and Tailwind CSS. The app
            fetches furniture products from an API, offering users a smooth
            experience with features such as:
            <br />
            <br />
            Filter and Search Functionality: Users can filter and search
            products by name, category, and sort them based on different
            criteria. <br />
            <br />
            Add to Cart Functionality: Utilizing Redux for state management,
            users can easily add items to their cart, with state persistence
            across the application.
            <br />
            <br /> User Authentication: A full registration and login system was
            implemented, allowing users to create accounts and access
            personalized features.
            <br />
            <br />
            Pagination: The application includes a pagination feature, enabling
            efficient navigation through large sets of product data. These
            components were made to ensure a smooth and intuitive user
            experience, leveraging modern tools and frameworks for optimal
            performance and maintainability.
          </p>
          <ul className="ml-6 p-6">
            <li>Date: May 2024</li>
            <li>Category: Front-end</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/com1.png")}
        >
          <Image
            className="object-cover"
            src="/images/com1.png"
            alt="Screenshot 1"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/com2.png")}
        >
          <Image
            className="object-cover"
            src="/images/com2.png"
            alt="Screenshot 2"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/com3.png")}
        >
          <Image
            className="object-cover"
            src="/images/com3.png"
            alt="Screenshot 3"
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
