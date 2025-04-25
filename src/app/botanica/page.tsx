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
            Botanica Plant Store
          </h4>

          <div className="flex items-center mt-6 pt-4">
            <span>Web Page:</span>
            <a
              href="https://botanica-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold md:whitespace-nowrap text-base ml-2 hover:underline"
            >
              https://botanica-seven.vercel.app/
            </a>
          </div>

          <p className="mt-6 pt-8 font-medium">
            A custom-built plant store built with Next.js to practice GraphQL
            and Shopify Storefront API integration.
          </p>
          <br />
          <p>
            🔍 Purpose & Motivation
            <br /> I created this project to practice GraphQL and Apollo Client,
            because I wanted to learn how GraphQL is actually used in real-world
            e-commerce platforms Understand how I can use Shopify Storefront API
            and practice frontend customization without using Shopify templates{" "}
            <br />
            <br />✨ What I built an online plant e-commerce website where users
            can:
            <br /> Browse and view product details
            <br /> Search for plant information via Wikipedia & Plant.id API
            <br /> Add products to cart <br />
            Switch region/currency
            <br /> Explore a custom blog (with Supabase) templates
            <br />
            <br /> 🛠️ Tech Stack Next.js 14, React, TypeScript, Tailwind CSS
            GraphQL + Apollo Client (for blog and Supabase) Shopify Storefront
            API (to fetch live product data) Supabase (for login and uploading
            blog images) <br />
            <br />
            🧠 What I Learned
            <br /> How to write GraphQL queries to fetch product data from
            Shopify <br />
            How to use Apollo Client to manage GraphQL data fetching and caching
            How to integrate a third-party CMS (Supabase) with custom blog
            functionality <br />
            How to build responsive layouts and component-based architecture
            with Tailwind and Next.js
          </p>

          <ul className="mt-6 pt-6">
            <li>Date: April 2025</li>
            <li>Category: Fullstack</li>
          </ul>
        </div>

        {/* 右側のセクション（画像） */}
        <div className="md:w-1/2 p-4 flex flex-wrap justify-center">
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/botanica.png")}
          >
            <Image
              className="object-cover"
              src="/images/botanica.png"
              alt="Screenshot 1"
              width={400}
              height={200}
            />
          </div>
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/botanica2.png")}
          >
            <Image
              className="object-cover"
              src="/images/botanica2.png"
              alt="Screenshot 2"
              width={400}
              height={200}
            />
          </div>
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/botanica3.png")}
          >
            <Image
              className="object-cover"
              src="/images/botanica3.png"
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
