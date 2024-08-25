"use client";
import React, { useEffect, useState } from "react";
import ProjectComponent from "@/components/ProjectComponent";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import ProductSlider from "@/components/ProductSlider";
import Footer from "@/components/Footer";

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

  // 画像のリスト
  const images = [
    "/images/s1.png",
    "/images/s2.png",
    "/images/s3.png",
    "/images/s4.png",
  ];

  return (
    <>
      <div className="flex justify-center font-bold text-4xl mt-10 mb-8">
        Comfy-store
      </div>

      <hr className="border-t-1 border-gray-300 my-4 mx-10" />
      <div className="md:ml-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Current Project" }]}
        />
      </div>
      <hr className="border-t-1 border-gray-300 my-4 mx-10" />

      <div className="max-w-screen-lg mx-auto">
        {/* 上部セクション */}
        <div className="mt-14 md:pt-10 mx-4">
          <div className="flex flex-row items-center justify-evenly md:ml-12 mb-8">
            <div className="flex flex-col items-center space-x-4">
              <span className="text-xs">Web page</span>
              <a
                href="https://store.nanamoriyama.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon font-bold text-xs md:text-base"
              >
                https://store.nanamoriyama.com/
              </a>
            </div>
            <a
              href="https://github.com/Nanamoriyama/comfy-store"
              className="github-icon hover:duration-300"
            >
              <Image
                src="/images/githubicon.png"
                height={60}
                width={60}
                alt="GitHub Icon"
              />
            </a>
          </div>

          {/* スライダー */}
          <div className="md:w-full md:p-14">
            <div className="font-raleway font-bold flex justify-center">
              Summary
            </div>
            <ProductSlider images={images} title="World In Freelance" />
          </div>

          <div className="mt-10">
            <ProjectComponent />
          </div>
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
