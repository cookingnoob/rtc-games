import { useContext } from 'react';
import { HangmanContext } from '../HangmanContext';
import StartMatch from './StartMatch';
import PlayingWindow from './PlayingWindow';
import YouLostWindow from'./YouLostWindow'
import WinWindow from './WinWindow'
const StartWindow = () => {
    const {strike, wordToGuess, playerString} = useContext(HangmanContext)
  return (
    <>
    <h1 className="gameTitle">Hangman</h1>
  
    {strike === '❌❌❌❌❌❌' ? 
      <> 
    <YouLostWindow/>
      </> 
    : 
      <div className='hangmanContainer'>
      {wordToGuess == '' ? 
        <>
        <StartMatch/>
        </>
      : 
        <>
        {playerString === wordToGuess ? 
        < WinWindow/>
        :
        <PlayingWindow/>
        }
        
        </> }
      </div>
    }
    </>
  )
}

export default StartWindow