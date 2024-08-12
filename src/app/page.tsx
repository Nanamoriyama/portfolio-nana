"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : <Hero />}
      {!isLoading && <Footer />}
    </>
  );
}
