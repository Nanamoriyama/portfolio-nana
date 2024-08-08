"use client";
import React, { useState, useEffect } from "react";

interface TextTypingMultipleProps {
  texts: string[];
}

const TextTypingMultiple: React.FC<TextTypingMultipleProps> = ({
  texts = [],
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (currentIndex < texts[textIndex].length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[textIndex][currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, 100); // タイピング速度を調整（100msごとに次の文字を表示）
        return () => clearTimeout(timeoutId);
      } else {
        // 全ての文字を表示した後、リセットして次の文字列に移行
        const resetTimeoutId = setTimeout(() => {
          setDisplayedText("");
          setCurrentIndex(0);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); // 1秒待ってからリセット
        return () => clearTimeout(resetTimeoutId);
      }
    }
  }, [currentIndex, textIndex, texts]);

  return (
    <div className="font-raleway text-4xl mt-8 ml-4 font-thin">
      <span>{displayedText}</span>
      <span className="Cursor">|</span>
    </div>
  );
};

export default TextTypingMultiple;
