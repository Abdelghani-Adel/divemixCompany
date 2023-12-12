import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="logoWrapper">
      <Image src="/img/logo.png" fill alt="" />
    </div>
  );
};

export default Logo;
