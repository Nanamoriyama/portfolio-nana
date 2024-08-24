"use client";
import React, { useEffect, useState } from "react";
import ProjectComponent from "@/components/ProjectComponent";
import Breadcrumb from "@/components/Breadcrumb"; // 新しいBreadcrumbコンポーネントをインポート
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
    "/images/tfc111.png",
    "/images/tfc112.png",
    "/images/tfc113.png",
    "/images/tfc114.png",
  ];

  return (
    <>
      <div className="flex justify-center m-10 p-2">
        <Image
          className="object-cover"
          src="/images/treelogo.png"
          alt="tree Logo"
          width={80}
          height={10}
        />
      </div>
      <div className="text-2xl flex justify-center font-bold">
        Travel Footprint Calculator
      </div>

      {/* ラインを追加 */}
      <hr className="border-t-1 border-gray-300 my-4 mx-10" />
      <div className="md:ml-8">
        {/* Breadcrumbを追加 */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: "Current Project" }, // 現在のページを示す
          ]}
        />
      </div>
      <hr className="border-t-1 border-gray-300 my-4 mx-10" />
      <div className="max-w-screen-lg mx-auto">
        {/* 上部セクション */}
        <div className="mt-14 md:pt-10 m-4 ml-6md:flex md:flex-col md:items-start md:ml-18">
          <div className="flex flex-col justify-center pl-6 items-start mb-8 md:mb-0 md:pl-20">
            <span className="text-xs">Web page</span>
            <a
              href="https://tfc.nanamoriyama.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon font-bold text-xs mb-4 md:text-base"
            >
              https://tfc.nanamoriyama.com/
            </a>
            <span className="text-xs">Project Summary</span>
            <a
              href="https://medium.com/@techlabs.rotterdam/travel-footprint-calculator-making-your-travels-more-sustainable-d1f9bc52a7fe"
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon font-bold text-xs mb-4 md:text-base"
            >
              https://medium.com/@techlabs...
            </a>
          </div>

          {/* スライダー */}
          <div className="md:w-full md:p-14">
            <div className="font-raleway font-bold flex justify-center">
              Summary
            </div>
            <ProductSlider
              images={images}
              title="Travel Footprint Calculator"
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
      {/* 右側のプロジェクトコンテンツ (モバイルでは非表示) */}
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
