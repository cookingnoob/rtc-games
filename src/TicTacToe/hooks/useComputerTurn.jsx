import { useContext, useEffect } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'
import useBoardInput from '../hooks/useBoardInput'

const useComputerTurn = () => {
    const {computer, board, winner, turn } = useContext(TicTacToeContext)

    const{handleBoardInput} = useBoardInput()
  
   
  
    const chooseFreeSpace = (board) => {
      const emptyCells = board
        .map((cell, index) => (cell == null ? index : null))
        .filter((index) => index !== null);
      return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    };
  
    useEffect(() => {
      if (turn === 'computadora' && winner == null) {
        const freeIndex = chooseFreeSpace(board);
        handleBoardInput(freeIndex, computer);
      }
    }, [winner, turn])
  

}

export default useComputerTurn