import React, { useState } from 'react'

const SendMeMessage = () => {
  const [email, setEmail] = useState('')

  const handleSendEmail = () => {
    console.log(email)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mt-16">
      <div className="laptop:w-2/5 w-3/5 border border-black-500 flex justify-center px-5 py-3 rounded-md">
        <input
          className="w-full outline-none bg-white"
          placeholder="Dirección de correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onClick={handleSendEmail}
        />
      </div>
      <button className="laptop:w-2/5 w-3/5 bg-black text-white px-5 py-3 m-3 rounded-md font-bold">
        Reserva la nueva thinkpad
      </button>
    </div>
  )
}

export default SendMeMessage
