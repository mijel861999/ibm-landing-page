import React from "react";
import Image from "next/image";
import IbmLogo from "../public/ibm-logo-18914.png";

const LogoContainer = () => {
  return (
    <div className="w-full flex justify-center mt-16">
      <div className="w-1/4">
        <Image src={IbmLogo} />
      </div>
    </div>
  );
};

export default LogoContainer;
