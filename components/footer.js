import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full flex justify-center my-20">
      <div className="w-8/12 flex justify-end items-center">
        <Link className="font-bold mx-4 text-xl text-center" href="/">
          <p className="font-bold mx-4 text-xl text-center">Términos de uso</p>
        </Link>
        <Link href="/">
          <p className="font-bold mx-4 text-xl text-center">
            Políticas de consumo
          </p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
