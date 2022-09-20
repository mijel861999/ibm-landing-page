import React from 'react'
import Image from 'next/image'
import IbmLogo from '../public/ibm-logo-18914.png'

/**
 * Componente del logo
 * @component
 * @LogoContainer
 *
 */

const LogoContainer = () => {
  return (
    <div className="w-full flex justify-center mt-16">
      <div className="w-200px">
        <Image width={500} height={184} src={IbmLogo} />
      </div>
    </div>
  )
}

export default LogoContainer
