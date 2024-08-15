"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductSlider from "@/components/ProductSlider"; // ProductSliderをインポート
import Footer from "@/components/Footer";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // 画像のリスト
  const images = [
    "/images/tfc111.png",
    "/images/tfc112.png",
    "/images/tfc113.png",
    "/images/tfc114.png",
  ];

  return (
    <>
      <div className="m-4 pt-8 md:pl-8"></div>
      <div className="max-w-screen-md mx-auto">
        {" "}
        {/* Added max width and centered content */}
        <h4 className="flex justify-center font-raleway mb-4 pb-4 font-bold text-2xl m-4 md:text-3xl">
          Travel Foot Print Calculator
        </h4>
        {/* 上部セクション */}
        <div className="md:pt-10 m-4 md:flex md:flex-col md:items-center">
          {/* 左側の見出しと説明 */}
          <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
            <div className="flex flex-col items-left ml-4 md:ml-8">
              <span className="text-xs">Web page</span>
              <a
                href="https://tfc.nanamoriyama.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon font-bold text-xs mb-4 md:text-base"
              >
                https://tfc.nanamoriyama.com/
              </a>
              <div className="flex flex-col mb-3 github-icon">
                <span className="text-xs">Project summary</span>
                <a
                  href="https://medium.com/@techlabs.rotterdam/travel-footprint-calculator-making-your-travels-more-sustainable-d1f9bc52a7fe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon text-xs font-bold mb-4 md:text-base"
                >
                  https://medium.com/@techlabs...
                </a>
              </div>
              <div className="flex items-left items-center">
                <span className="text-xs">GitHub Repository</span>
                <a
                  href="https://github.com/Nanamoriyama/travel-footprint-calculator"
                  className="github-icon items-center"
                >
                  <Image
                    src="/images/githubicon.png"
                    height={45}
                    width={45}
                    alt="GitHub icon"
                    className="flex items-center"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* 右側のSwiperスライダーをデスクトップでは下に配置 */}
          <div className="md:w-full md:mt-8 mt-4 md:p-16">
            <ProductSlider
              images={images}
              title="Travel Foot Print Calculator"
            />
          </div>
        </div>
        {/* 下部の写真セクション */}
        <div className="flex flex-wrap justify-evenly mt-8">
          <div
            className="bg-white border p-6 m-2 cursor-pointer"
            onClick={() => openModal("/images/tfc6.png")}
          >
            <p>We discussed ideas on Miro Board</p>
            <Image
              className="object-cover"
              src="/images/tfc6.png"
              alt="Screenshot 3"
              width={400}
              height={200}
              layout="responsive"
            />
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
              layout="responsive"
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
