"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";

interface Project {
  href: string;
  img: string;
  alt: string;
  title: string;
  className: string;
  tool: string;
  externalLink?: string;
}

const Projects: React.FC = () => {
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

  const projects: Project[] = [
    {
      href: "/wif_client",
      img: "/images/wifclient1.png",
      alt: "Wif_client",
      title: "World in Freelance",
      className: styles.project1,
      tool: "React/NEXT.js",
      externalLink: "https://wif.ib-tec.co.jp/client",
    },
    {
      href: "/wif",
      img: "/images/projects2.png",
      alt: "Wif",
      title: "World in Freelance",
      className: styles.project1,
      tool: "React/NEXT.js",
      externalLink: "https://worldinfreelance.ib-tec.co.jp/",
    },
    {
      href: "/fashion",
      img: "/images/projects3.png",
      alt: "Fashion",
      title: "Fashion Website",
      className: styles.project2,
      tool: "React/NEXT.js",
      externalLink: "https://fashion-web-practice.vercel.app/",
    },
    {
      href: "/botanica",
      img: "/images/botanica.png",
      alt: "Fashion",
      title: "Online Plants Store",
      className: styles.project2,
      tool: "React/NEXT.js",
      externalLink: "https://botanica-seven.vercel.app/",
    },
    {
      href: "/japaneseschool",
      img: "/images/projects7.png",
      alt: "Moriyama",
      title: "Japanese School Moriyama",
      className: styles.project3,
      tool: "React/Next.js",
      externalLink: "https://moriyama.vercel.app/",
    },
    {
      href: "/phonecase",
      img: "/images/projects4.png",
      alt: "Phonecase",
      title: "Phonecase",
      className: styles.project4,
      tool: "React/NEXT.js",
      externalLink: "https://phone-case-tau.vercel.app/",
    },
    {
      href: "/mimi33",
      img: "/images/projects5.png",
      alt: "Mimi33",
      title: "Private Bartender",
      className: styles.project5,
      tool: "React",
      externalLink: "https://mimi-bartender.vercel.app/",
    },

    {
      href: "/comfyStore",
      img: "/images/projects6.png",
      alt: "Comfy",
      title: "Comfy Store",
      className: styles.project7,
      tool: "React",
      externalLink: "https://comfy-store-gilt-one.vercel.app/",
    },
  ];

  return (
    <div
      className="relative bg-black min-h-screen overflow-y-hidden-importantroot-container"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      {/* Link for "Home" */}
      <div className="text-stone-200 fixed top-1 right-0 p-2 flex items-center gap-2 transition-colors duration-300 border border-stone-200 rounded-full hover:border-red-500">
        <Link href="/about" className="text-xl font-thin px-2">
          About
        </Link>
      </div>

      {/* New container for text and projects */}
      <div className={styles.textAndProjects}>
        <div ref={scrollContainerRef} className={styles.horizontalScroll}>
          <div className="whitespace-nowrap flex flex-col justify-center items-center pr-10 pb-20 md:gap-5 px-5">
            <span className="text-stone-100 font-bold text-xl md:text-7xl">
              F R O N T E N D - D E V E L O P E R
            </span>
            <br />
            <div className="px-2.5 py-1.5 inline-block">
              <Image
                src="/images/nanamoriyama.png"
                alt="nanam"
                width={800}
                height={700}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-stone-200  fixed top-1 right-24 p-2 flex items-center gap-2 transition-colors duration-300 border border-stone-200 rounded-full hover:border-red-500">
              <Link
                href="https://nana-blog.vercel.app/"
                className="text-xl font-thin px-2"
              >
                Blog
              </Link>
            </div>
          </div>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectContainer} ${project.className}`}
            >
              <Link
                href={project.externalLink!}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    className={`${styles.image}`}
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h4 className={`${styles.projectTitle}`}>{project.title}</h4>
                <h4 className={`${styles.projectTool}`}>{project.tool}</h4>

                <div className={styles.overlay}></div>
              </Link>
              <Link
                href={project.href}
                className="inline-block mt-10 md:mt-5 px-4 py-1 text-sm border border-white text-white hover:bg-white hover:text-black transition"
              >
                Detail
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
