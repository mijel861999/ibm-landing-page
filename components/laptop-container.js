import React from 'react'
import Image from 'next/image'
import Thinkpad from '../public/laptop-ibm.png'

const LaptopContainer = () => {
  return (
    <div className="w-full flex flex-col mt-16 justify-start items-center">
      <h1 className="text-4xl font-bold mb-5 text-center">
        Reserva la nueva thinkpad
      </h1>
      <p className="text-lg text-center">
        Prueba la nueva tecnología con la que llevarás <br></br> tus productos
        al siguiente nivel
      </p>
      <div className="mt-5">
        <Image width={356} height={315} src={Thinkpad} />
      </div>
    </div>
  )
}

export default LaptopContainer
