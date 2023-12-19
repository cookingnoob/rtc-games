import { useContext, useState } from 'react'
import StartSudoku from './components/StartSudoku';
import PlayingSudokuWindow from './components/PlayingSudokuWindow';
import { SudokuContext, SudokuProvider } from './SudokuContext';
import StartWindow from './components/StartWindow';

const Sodoku = () => {
  
 
  return (
    <SudokuProvider>
      <StartWindow/>
  </SudokuProvider>
  )
}

export default Sodoku