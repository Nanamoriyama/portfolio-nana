"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

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
          src="/images/wiflogo.jpg"
          alt="WIF Logo"
          width={300}
          height={270}
        />
      </div>

      <div className="m-4 flex justify-between">
        <div>
          <h4 className="font-light text-3xl m-4 md:text-4xl">
            Recruitment platform
          </h4>
          <div className="flex items-center">
            <a
              href="https://world-in-freelance.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 text-xs md:m-6 md:text-base"
            >
              https://world-in-freelance.vercel.app/
            </a>
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 inline-block"></span>
          </div>
          <p className="m-6 p-4 md:p-14">
            My Contributions:
            <br />
            I refactored the original codebase, separating it into more
            understandable and maintainable components. I updated the project to
            the latest version of Next.js and deployed it on Vercel.
            Additionally, I enhanced the CSS to improve the visual appeal and
            user experience for Form, Navigation bar and Footer.
            <br />
            <br />
            Form Handling and Automation:
            <br />
            The project includes a custom form managed using Next.js's API
            Routes. Upon submission, the form data is processed and sent to n8n,
            an automation tool, which then automatically populates a Google
            Sheet. This setup ensures efficient data collection and easy access
            to the submitted information.
            <br />
            <br />
            Technical Challenges & Learnings:
            <br />I faced challenges in adapting the project to the latest
            Next.js version, which involved learning new features and best
            practices. Additionally, managing state across components and
            optimizing the deployment process were key learning experiences. The
            planned migration to AWS will further develop my skills in cloud
            infrastructure management.
          </p>
          <ul className="ml-6 p-6">
            <li>Date: June 2024</li>
            <li>Category: Front-end</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/wif1.png")}
        >
          <Image
            className="object-cover"
            src="/images/wif1.png"
            alt="Screenshot 1"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/wif2.png")}
        >
          <Image
            className="object-cover"
            src="/images/wif2.png"
            alt="Screenshot 2"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/wif3.png")}
        >
          <Image
            className="object-cover"
            src="/images/wif3.png"
            alt="Screenshot 3"
            width={400}
            height={200}
          />
        </div>
        <div
          className="bg-white border p-6 m-2 cursor-pointer"
          onClick={() => openModal("/images/wif4.png")}
        >
          <Image
            className="object-cover"
            src="/images/wif4.png"
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
