import { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';
import useBoardInput from '../hooks/useBoardInput';

const Board = () => {
  const { board, player } = useContext(TicTacToeContext);
  const {handleBoardInput} = useBoardInput();
  //creates a board, it maps through board array and creates a button for each element
  return (
    <div className="board">
      {board.map((cell, index) => {
        return (
          <button key={index} onClick={() => { handleBoardInput(index, player); }} value={cell} className="cell">{cell}</button>
        );
      })}
    </div>
  )
}

export default Board