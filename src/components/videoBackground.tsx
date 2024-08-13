import React, { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  desktopSrc: string;
  mobileSrc: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  desktopSrc,
  mobileSrc,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Failed to play the video:", error);
      });
    }
  }, [videoRef]);

  return (
    <div className={`relative w-full ${className}`}>
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
        <source src={desktopSrc} type="video/mp4" media="(min-width: 768px)" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
