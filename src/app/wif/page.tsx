"use client";
import React, { useState } from "react";
import ProjectComponent from "@/components/ProjectComponent";
import Breadcrumb from "@/components/Breadcrumb"; // 新しいBreadcrumbコンポーネントをインポート
import Image from "next/image";
import ProductSlider from "@/components/ProductSlider";
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
    "/images/ibt111.png",
    "/images/ibt112.png",
    "/images/ibt113.png",
    "/images/ibt114.png",
  ];

  return (
    <>
      <div className="flex justify-center m-10 p-2">
        <Image
          className="object-cover"
          src="/images/wiflogo.jpg"
          alt="WIF Logo"
          width={300}
          height={270}
        />
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
      <div className="max-w-screen-lg mx-auto md:flex md:space-x-8">
        {/* 左側のメインコンテンツ */}
        <div className="md:w-2/3">
          {/* 上部セクション */}
          <div className="mt-14 md:pt-10 m-4 md:flex md:flex-col md:items-start md:ml-8">
            <div className="flex flex-col justify-center items-start mb-8 md:mb-0">
              <div className="flex flex-col items-start ml-4 md:ml-12">
                <span className="text-xs">Web page</span>
                <a
                  href="https://worldinfreelance.ib-tec.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon font-bold text-xs mb-4 md:text-base"
                >
                  https://worldinfreelance.ib-tec.co.jp/
                </a>
                <span className="text-xs">Company</span>
                <a
                  href="https://worldinfreelance.ib-tec.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon font-bold text-xs mb-4 md:text-base"
                >
                  Inbound Technology
                </a>
              </div>
            </div>

            {/* スライダー */}

            <div className="md:w-full md:p-14">
              <div className="font-raleway font-bold flex justify-center">
                Summary
              </div>
              <ProductSlider
                images={images}
                title="Travel Foot Print Calculator"
              />
            </div>
          </div>

          <div className="flex justify-center items-center p-6 m-4 md:w-full md:max-w-xl mx-auto">
            Through this project, I gained valuable experience in developing and
            maintaining front-end components using React to build dynamic and
            responsive user interfaces. I learned how to effectively use pnpm
            and discovered its convenience in streamlining our workflow.
            Additionally, I explored automation techniques with n8n and
            integrated data seamlessly with Google Sheets. Working efficiently
            as a team.
            <br /> These experiences, along with many other insights, have
            greatly expanded my knowledge and skills.
          </div>
        </div>

        {/* 右側のプロジェクトコンテンツ (モバイルでは非表示) */}
        <div className="hidden  p-8 md:flex md:w-1/3 flex-col space-y-4 mt-8 md:mt-16 sticky top-20">
          <ProjectComponent />
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
