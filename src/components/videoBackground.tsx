import React from "react";

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
  return (
    <div className={`relative w-full ${className}`}>
      <video
        className={`object-cover w-full h-full`}
        autoPlay
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
