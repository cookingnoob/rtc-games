import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'
import StartSudoku from './StartSudoku'
import PlayingSudokuWindow from './PlayingSudokuWindow'
import { LoginContext } from '../../Login/LoginContext'
import useLocalUser from '../../Login/hooks/useLocalUser'

const StartWindow = () => {
    const {text, sudokuBoard} = useContext(SudokuContext)
    const {user} = useContext(LoginContext)
    useLocalUser()
  return (
    <>
  {user !== null ? 
  <>
  <h1 className="gameTitle">Sudoku</h1>

  {sudokuBoard === null ? 
  <> 
   <h1>Hola! {user.name}</h1>
   <h2>{text}</h2>
  <StartSudoku  buttonName={'inicia la partida'}/>
  </>
  : 
  <>
  <PlayingSudokuWindow/>
  </>
  }
  </> : 
  <h1>Inicia sesión para jugar</h1>}
    </>
  )
}

export default StartWindow