import { useContext, useEffect } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'
import useBoardInput from '../hooks/useBoardInput'

const useComputerTurn = () => {
    const {computer, board, winner, turn } = useContext(TicTacToeContext)
    const{handleBoardInput} = useBoardInput()
  
    //Checks which cell is empty and chooses one randomly
    const chooseFreeSpace = (board) => {
      const emptyCells = board
        .map((cell, index) => (cell == null ? index : null))
        .filter((index) => index !== null);
      return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    };
  //listens to who's turn it is and if there is no winner
  //selects one free space on the board and prints computer value on that cell
    useEffect(() => {
      if (turn === 'computadora' && winner == null) {
        const freeIndex = chooseFreeSpace(board);
        handleBoardInput(freeIndex, computer);
      }
    }, [winner, turn])
  
}

export default useComputerTurn