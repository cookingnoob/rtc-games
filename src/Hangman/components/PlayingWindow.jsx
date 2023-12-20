import LetterButtons from './LetterButtons'

import HideLetters from './HideLetters'
import { useContext } from 'react'
import { HangmanContext } from '../HangmanContext'
import useClues from '../hooks/useClues'

const PlayingWindow = () => {
const {strike, clue} = useContext(HangmanContext)
useClues()
  return (
    <>
       <h1>{strike}</h1>
    {strike === '❌❌❌❌❌' ? <p>último intento💀</p> : <></>}
    <HideLetters />
    <p className='clues'>{clue}</p>
    <LetterButtons />
  
    </>
  )
}

export default PlayingWindow