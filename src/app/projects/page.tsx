"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Projects.module.css"; // モジュールCSSをインポート
import TextTyping from "@/components/TypingAnimation";

const Projects = () => {
  return (
    <div className="md:mx-4">
      <div className="flex justify-center bg-white pt-20 font-light text-5xl">
        <TextTyping text="PROJECTS" />
      </div>

      <div className="bg-white mx-auto grid grid-cols-2 text-xs md:grid-cols-3 gap-6 w-full p-8 justify-evenly md:text-sm ">
        {[
          {
            href: "/tfp",
            img: "/images/treelogo.png",
            alt: "Tfc",
            title: "Travel Footprint Calculator",
            className: styles.tfc,
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
            img: "/images/logo.svg",
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
          <div key={index} className={styles.projectContainer}>
            <Link
              href={project.href}
              className={`${styles.link} ${project.className}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
                  className={`${styles.image} object-contain`}
                />
              </div>
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <h4 className={styles.projectTool}>{project.tool}</h4>
              <div className={styles.overlay}></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
