import React from 'react'
import Image from 'next/image'
import Procesador from '../public/procesador.png'
import Disco from '../public/disco-duro.png'
import Tarjeta from '../public/tarjeta-grafica.png'

const Advantages = () => {
  return (
    <div className="w-full flex flex-col laptop:flex-row justify-center items-center my-20">
      <div className="laptop:w-64 w-full flex flex-col justify-center items-center my-5">
        <Image width={90} height={90} src={Procesador} alt="Procesador" />
        <h2 className="mt-8 font-black text-xl">Procesador core i9</h2>
        <p className="text-center mt-3 text-sm">
          Un fuerte procesador para realizar tareas pesadas
        </p>
      </div>
      <div className="laptop:w-64 w-full flex flex-col justify-center items-center tablet:my-5">
        <Image width={90} height={90} src={Disco} alt="Disco" />
        <h2 className="mt-8 font-black text-xl">Disco duro de 3TB</h2>
        <p className="text-center mt-3 text-sm">
          Gran cantidad de espacio para no perder información
        </p>
      </div>
      <div className="laptop:w-64 w-full flex flex-col justify-center items-center tablet:my-5">
        <Image width={90} height={90} src={Tarjeta} alt="Tarjeta gráfica" />
        <h2 className="mt-8 font-black text-xl">Tarjeta de video</h2>
        <p className="text-center mt-3 text-sm">
          Tarjeta de video para correr los mejores juegos
        </p>
      </div>
    </div>
  )
}

export default Advantages
