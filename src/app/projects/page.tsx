"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";
import TextTyping from "@/components/TypingAnimation";

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollWidth =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const scrollLeft = scrollContainer.scrollLeft;
      const progress = (scrollLeft / scrollWidth) * 100;
      setScrollProgress(progress);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);

      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        overflowY: "hidden",
      }}
      className="custom-projects-bg overscroll-none"
    >
      <div className="flex justify-center pt-20 font-light text-5xl text-white">
        <TextTyping text="PROJECTS" />
      </div>

      {/* New container for text and projects */}
      <div className="text-and-projects">
        <div
          ref={scrollContainerRef}
          className={styles.horizontalScroll}
          style={{
            overflowX: "scroll",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            overscrollBehavior: "contain",
          }}
        >
          <div className="whitespace-nowrap flex flex-col justify-center items-center md:gap-5 px-5">
            <span className=" text-stone-100 font-bold text-4xl md:text-9xl">
              C O D E is F u n
            </span>
            <br />
            <div className="px-2.5 py-1.5 inline-block">
              <Image
                src="/images/nanam.png"
                alt="nanam"
                width={700}
                height={500}
                objectFit="contain"
              />
            </div>
          </div>
          {[
            {
              href: "/tfp",
              img: "/images/tfc99.png",
              alt: "Tfc",
              title: "Travel Footprint Calculator",
              className: styles.project1, // 1st project
              tool: "React/TechLab Rotterdam",
            },
            {
              href: "/wif",
              img: "/images/projects2.png",
              alt: "Wif",
              title: "World in Freelance",
              className: styles.project2, // 2nd project
              tool: "React/NEXT.js",
            },
            {
              href: "/fashion",
              img: "/images/projects3.png",
              alt: "Fashion",
              title: "Fashion Website",
              className: styles.project3, // 3rd project
              tool: "React/NEXT.js",
            },
            {
              href: "/phonecase",
              img: "/images/projects4.png",
              alt: "Phonecase",
              title: "Phonecase",
              className: styles.project4, // 4th project
              tool: "React/NEXT.js",
            },
            {
              href: "/mimi33",
              img: "/images/projects5.png",
              alt: "Mimi33",
              title: "Private Bartender",
              className: styles.project5, // 5th project
              tool: "React",
            },
            {
              href: "/comfyStore",
              img: "/images/projects6.png",
              alt: "Comfy",
              title: "Comfy Store",
              className: styles.project6,
              tool: "React",
            },
            {
              href: "/japaneseschool",
              img: "/images/projects7.png",
              alt: "Moriyama",
              title: "Japanese School Moriyama",
              className: styles.project7,
              tool: "React/Next.js",
            },
            // Add more projects as needed
          ].map((project, index) => (
            <div
              key={index}
              className={`${styles.projectContainer} ${project.className}`}
            >
              <Link href={project.href} className={`${styles.link}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    className={`${styles.image} object-contain`}
                  />
                </div>
                <h4 className={`${styles.projectTitle} text-white`}>
                  {project.title}
                </h4>
                <h4 className={`${styles.projectTool} text-gray-400`}>
                  {project.tool}
                </h4>
                <div className={styles.overlay}></div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className={styles.progressBar}
        style={{ width: "50%", margin: "0 auto" }}
      >
        <div
          className={styles.progressBarFill}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default Projects;
