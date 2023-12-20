import Board from './Board'
import NumbersButtons from './numbersButtons'
import DeleteButton from './DeleteButton'
import AddValidNumber from './AddValidNumber'
import StartSudoku from './StartSudoku'
import RestartSudoku from './RestartSudoku'
import SolveButton from './SolveButton'

const PlayingSudokuWindow = () => {
  return (
    <>
    <Board />
    <NumbersButtons />
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

// solution={solution} setSolution={setSolution}