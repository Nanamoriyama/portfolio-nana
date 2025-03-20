"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectComponent from "@/components/ProjectComponent";

const Page = () => {
  useEffect(() => {
    // Enable scrolling when the page mounts
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "auto";

    return () => {
      // Disable scrolling when the page unmounts
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
        {/* Left Section */}
        <div className="md:w-1/2 p-8">
          <h4 className="font-semibold text-4xl mt-4 md:text-6xl">
            Japanese Language School Moriyama
          </h4>

          <div className="flex items-center mt-6 pt-4">
            <span>Web Page:</span>
            <a
              href="https://moriyama.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold md:whitespace-nowrap text-base ml-2 hover:underline"
            >
              https://moriyama.vercel.app/
            </a>

            <a
              href="https://github.com/Nanamoriyama/JapaneseSchool"
              className="ml-2 hover:underline md:ml-4"
            >
              Code on GitHub
            </a>
          </div>

          <p className="mt-6 pt-8">
            Next.js and TypeScript Project.
            <br />
            I created a website for my own Japanese language school.
            <br />
            The logo transition is implemented using CSS.
            <br />
            <br />I designed and implemented a loading screen using React and
            CSS transitions.
          </p>

          <ul className="mt-6 pt-6">
            <li>Date: May 2024</li>
            <li>Category: Front-end (with some Backend)</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-4 flex flex-wrap justify-center">
          {["/images/mphone.png", "/images/mo1.png", "/images/mo2.png"].map(
            (src, index) => (
              <div
                key={index}
                className="bg-white border p-6 m-2 cursor-pointer"
                onClick={() => openModal(src)}
              >
                <Image
                  className="object-cover"
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  width={400}
                  height={200}
                />
              </div>
            )
          )}
        </div>
      </div>

      <div className="mt-10">
        <ProjectComponent />
      </div>

      {/* Modal */}
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
