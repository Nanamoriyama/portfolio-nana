import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center  ${className}`}>
      <Image
        src="/images/logo11.png"
        alt="Logo"
        width={600}
        height={600}
        className="mx-auto"
        priority
      />
    </div>
  );
};

export default Logo;
