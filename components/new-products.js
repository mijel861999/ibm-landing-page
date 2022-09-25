import React from 'react'

const NewProducts = () => {
  return (
    <div className="w-full flex flex-col laptop:flex-row justify-center items-center my-20">
      <h1 className="text-5xl tablet:text-8xl  font-bold mr-8">
        Elegancia y <br></br> tecnología
      </h1>
      <div className="mt-5 laptop:mt-1">
        <p className="mb-3">
          Revisa más de nuestros <br></br> productos
        </p>
        <button className="font-bold bg-black text-white py-5 px-12 rounded">
          Nuestros <br></br> productos
        </button>
      </div>
    </div>
  )
}

export default NewProducts
