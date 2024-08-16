import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper"; // Swiperの型をインポート

type ProductSliderProps = {
  images: string[];
  title: string;
};

const ProductSlider: React.FC<ProductSliderProps> = ({ images, title }) => {
  const swiperRef = useRef<SwiperCore | null>(null); // Swiperのインスタンスの型を指定

  const handleSlideClick = (e: React.MouseEvent) => {
    if (!swiperRef.current) return;

    const slideWidth = e.currentTarget.clientWidth;
    const clickPosition =
      e.clientX - e.currentTarget.getBoundingClientRect().left;

    if (clickPosition < slideWidth / 2) {
      // 左側をクリックした場合
      swiperRef.current.slidePrev();
    } else {
      // 右側をクリックした場合
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="mt-4 mx-auto max-w-full relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiperインスタンスを参照にセット
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation, Pagination]}
        className="relative"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center cursor-pointer"
            onClick={handleSlideClick}
          >
            <div className="overflow-hidden shadow-md">
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                width={600}
                height={400}
                quality={100}
                priority={index === 0}
                className="object-contain w-full h-auto transition-transform duration-300 ease-in-out"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-[-50px] transform -translate-y-1/2 text-black bg-black bg-opacity-50 p-3 cursor-pointer z-10">
          &#10094;
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-[-50px] transform -translate-y-1/2 text-black bg-black bg-opacity-50 p-3  cursor-pointer z-10">
          &#10095;
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
