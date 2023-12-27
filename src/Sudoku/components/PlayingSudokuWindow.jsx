import Board from './Board'
import NumbersButtons from './NumbersButtons'
import DeleteButton from './DeleteButton'
import AddValidNumber from './AddValidNumber'
import StartSudoku from './StartSudoku'
import RestartSudoku from './RestartSudoku'
import SolveButton from './SolveButton'
import { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'

const PlayingSudokuWindow = () => {
  const {text} = useContext(SudokuContext)
  return (
    <>
    <h1>{text}</h1>
    <Board />
    < NumbersButtons/>
    <div className="modifySudoku">
      <AddValidNumber />
      <DeleteButton  />
    </div>
    <div className="refreshSudoku"> 
      <SolveButton />
      <StartSudoku  buttonName={'Nuevo tablero'}/>
      <RestartSudoku />
    </div>
    </>
  )
}

export default PlayingSudokuWindow
