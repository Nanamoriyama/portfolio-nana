"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Hero from "./Hero"; // Hero component

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3.5 seconds
    }, 3500);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Render Hero component conditionally */}
      {!isLoading && <Hero />}

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-400 transition-opacity duration-[1000ms] ease-in-out">
          <div className="transition-opacity duration-[2500ms] ease-in-out opacity-100">
            <Logo />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
