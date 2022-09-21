import React from 'react'

const SendMeMessage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-16">
      <div className="tablet:w-2/5 w-4/5 border border-black-500 flex justify-center px-5 py-3 rounded-md">
        <input
          className="w-full"
          placeholder="Dirección de correo electrónico"
        />
      </div>
      <button className="tablet:w-2/5 w-4/5 bg-black text-white px-5 py-3 m-3 rounded-md font-bold">
        Reserva la nueva thinkpad
      </button>
    </div>
  )
}

export default SendMeMessage
