"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    router.push("/");

    setIsDrawerOpen(false);
  };

  if (!isMounted) {
    return null; // マウントされるまで何も表示しない
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 shadow-md">
      <div className="relative w-24 h-8 text-xl text-stone-800 font-light">
        Nana
        <br />
        Moriyama
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button onClick={toggleDrawer}>
          <RxHamburgerMenu className="text-6xl w-6 flex-shrink-0 text-stone-" />
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white bg-opacity-75 z-40 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center`}
      >
        <button onClick={toggleDrawer} className="absolute top-4 right-4">
          <IoMdClose className="text-6xl w-6 flex-shrink-0 text-black" />
        </button>
        <ul className="mt-20 flex flex-col items-center">
          <li className="relative group p-4 flex justify-center w-full">
            <Link href="/" onClick={toggleDrawer}>
              HOME
            </Link>
          </li>
          <li className="relative group p-4 flex justify-center w-full">
            <Link href="/men" onClick={toggleDrawer}>
              ABOUT
            </Link>
          </li>
          <li className="relative group p-4 flex justify-center w-full">
            <Link href="/woman" onClick={toggleDrawer}>
              PROJECTS
            </Link>
          </li>
          <li className="relative group p-4 flex justify-center w-full">
            <Link href="/bags" onClick={toggleDrawer}>
              BLOGS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
