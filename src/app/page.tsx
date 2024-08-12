"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // LoadingScreenのスライドアウトが完了後にHeroを表示
    }, 6000); // 6.5秒後にスライドアウト完了とともにHeroを表示

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <LoadingScreen /> : <Hero />}</>;
}
