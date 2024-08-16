// components/ProjectComponent.tsx
"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "@/app/projects/Projects.module.css";

const ProjectComponent = () => {
  return (
    <div className="font-raleway md:mx-4 sticky">
      <div>
        <hr className="font-medium border-stone-400" />
        <div className="flex justify-center mt-2 mb-2 bg-white font-light text-xl">
          Other Projects
        </div>
        <hr className="border-stone-400" />
      </div>

      {/* プロジェクトを縦に並べる */}
      <div className="bg-white mx-auto flex flex-col items-center gap-4 w-full p-4 md:text-sm">
        {[
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
        ].map((project, index) => (
          <div key={index} className="w-full max-w-xs">
            <Link href={project.href} className={` ${project.className}`}>
              <div className="relative w-[50%] pt-[50%] mb-2 border border-stone300 mx-auto  transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <div className="absolute inset-0 ">
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
                    className={`object-contain p-4`}
                  />
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-sm mt-2">{project.title}</h4>
                <h4 className="text-xs mt-1">{project.tool}</h4>
              </div>
              <hr className="mt-3 border-stone-500" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
