import React from "react";
import Image from "next/image";
import Thinkpad from "../public/laptop-ibm.png";

const LaptopContainer = () => {
  return (
    <div className="w-full flex-col mt-16">
			<h1>Reserva la nueva thinkpad</h1>
			<p>Prueba la nueva tecnología con la que llevarás tus productos al siguiente nivel</p>
      <div className="w-1/4">
        <Image src={Thinkpad} />
      </div>
    </div>
  );
};

export default LaptopContainer;
