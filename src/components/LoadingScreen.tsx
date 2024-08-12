"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const LoadingScreen: React.FC = () => {
  const [logoVisible, setLogoVisible] = useState(false); // ロゴの表示制御
  const [screenSlideOut, setScreenSlideOut] = useState(false); // LoadingScreenのスライドアウト制御

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setLogoVisible(true); // ロゴをフェードイン
    }, 500); // 0.5秒後にロゴ表示開始

    const screenSlideOutTimer = setTimeout(() => {
      setScreenSlideOut(true); // LoadingScreenをスライドアウト
    }, 3500); // ロゴが完全に表示された後にスライドアウト開始

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(screenSlideOutTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-blue-400 flex items-center justify-center z-50 transform transition-transform duration-[3000ms] ease-in-out ${
        screenSlideOut ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`transition-opacity duration-[2500ms] ease-in-out ${
          logoVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Logo />
      </div>
    </div>
  );
};

export default LoadingScreen;
