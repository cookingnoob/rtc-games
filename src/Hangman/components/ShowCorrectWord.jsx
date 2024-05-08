import React, { useContext } from 'react'
import { HangmanContext } from '../HangmanContext'

const ShowCorrectWord = () => {
  const { setGiveUp } = useContext(HangmanContext)

  return (
    <button onClick={() => setGiveUp(true)} className='clueBtn'>¿Quieres saber la respuesta?</button>
  )
}

export default ShowCorrectWord