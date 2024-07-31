"use client";
import React, { useState, useEffect } from "react";

interface TextTypingProps {
  text: string;
}

const TextTyping: React.FC<TextTypingProps> = ({ text = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100); // タイピング速度を調整（100msごとに次の文字を表示）

      return () => clearTimeout(timeoutId);
    } else {
      // 全ての文字を表示した後、リセットしてループ
      const resetTimeoutId = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 1000); // 1秒待ってからリセット

      return () => clearTimeout(resetTimeoutId);
    }
  }, [currentIndex, text]);

  return (
    <div className="TextTyping">
      <span>{displayedText}</span>
      <span className="Cursor">|</span>
    </div>
  );
};

export default TextTyping;
