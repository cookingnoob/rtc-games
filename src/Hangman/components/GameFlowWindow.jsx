import { useContext } from 'react';
import { HangmanContext } from '../HangmanContext';
import StartMatch from './StartMatch';
import PlayingWindow from './PlayingWindow';
import YouLostWindow from'./YouLostWindow'
import WinWindow from './WinWindow'
import { LoginContext } from '../../Login/LoginContext';
import useLocalUser from '../../Login/hooks/useLocalUser';
const StartWindow = () => {
    const {strike, wordToGuess, playerString, giveUp} = useContext(HangmanContext)
    const {user} = useContext(LoginContext)
    useLocalUser()
  return (
    <>
    {user !== null ?
    <> 
    <h1 className="gameTitle">Hangman</h1>
    {strike === '❌❌❌❌❌❌' || giveUp ? 
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
    </> :
    <h1>Inicia sesión para jugar</h1>}
 
    </>
  )
}

export default StartWindow