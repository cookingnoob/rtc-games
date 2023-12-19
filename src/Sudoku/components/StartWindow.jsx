import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'
import StartSudoku from './StartSudoku'
import PlayingSudokuWindow from './PlayingSudokuWindow'

const StartWindow = () => {
    const {text, sudokuBoard} = useContext(SudokuContext)
  return (
    <>
    <h1 className="gameTitle">Sudoku</h1>
    <h2>{text}</h2>
  {sudokuBoard === null ? 
  <StartSudoku  buttonName={'inicia la partida'}/>
  : 
  <>
  <PlayingSudokuWindow/>
  </>
  }
    </>
  )
}

export default StartWindow