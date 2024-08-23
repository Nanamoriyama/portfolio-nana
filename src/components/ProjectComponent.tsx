"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/app/projects/ProjectComponent.module.css";

const ProjectComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  const projects = [
    {
      href: "/tfp",
      img: "/images/treelogo.png",
      alt: "Tfc",
      title: "Travel Footprint Calculator",
      tool: "React/TechLab Rotterdam",
    },
    {
      href: "/wif",
      img: "/images/wiflogo.jpg",
      alt: "Wif",
      title: "World in Freelance",
      className: styles.wif,
      tool: "React/NEXT.js",
    },
    {
      href: "/fashion",
      img: "/images/logo.png",
      alt: "Fashion",
      title: "Fashion Website",
      className: styles.fashion,
      tool: "React/NEXT.js",
    },
    {
      href: "/phonecase",
      img: "/images/snake-1.png",
      alt: "Phonecase",
      title: "Phonecase",
      className: styles.phonecase,
      tool: "React/NEXT.js",
    },
    {
      href: "/mimi33",
      img: "/images/mimilogo.png",
      alt: "Mimi33",
      title: "Private Bartender",
      className: styles.mimi33,
      tool: "React",
    },
    {
      href: "/comfyStore",
      img: "/images/2.png",
      alt: "Comfy",
      title: "Comfy Store",
      className: styles.comfy,
      tool: "React",
    },
    {
      href: "/japaneseschool",
      img: "/images/moriyamalogo.png",
      alt: "Moriyama",
      title: "Japanese School Moriyama",
      className: styles.moriyama,
      tool: "React/Next.js",
    },
  ];

  return (
    <div className="font-raleway md:mx-4">
      <div>
        <hr className="font-medium border-stone-400" />
        <div className="flex justify-center mt-6 mb-1 bg-white font-light text-xl">
          Other Projects
        </div>
      </div>

      <div className="bg-white mx-auto w-full p-6">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="p-2">
              <Link href={project.href} className={`${project.className}`}>
                <div className="relative w-[80%] pt-[80%] mb-2 border border-stone-300 shadow-lg mx-auto transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0">
                    <Image
                      src={project.img}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-sm mt-2">{project.title}</h4>
                  <h4 className="text-xs mt-1 text-gray-500">{project.tool}</h4>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectComponent;
