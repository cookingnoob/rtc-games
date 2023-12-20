import LetterButtons from './LetterButtons'
import Clues from './Clues'
import HideLetters from './HideLetters'
import { useContext } from 'react'
import { HangmanContext } from '../HangmanContex'

const PlayingWindow = () => {
const {strike} = useContext(HangmanContext)
  return (
    <>
       <h1>{strike}</h1>
    {strike === '❌❌❌❌❌' ? <p>último intento💀</p> : <></>}
    <HideLetters />
    <LetterButtons />
    <Clues /> 
    </>
  )
}

export default PlayingWindow