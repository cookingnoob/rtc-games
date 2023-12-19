import React, { useContext, useEffect } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'

const Computer = () => {
  const {setComputer, player, handleBoardInput, computer, board, winner, turn} = useContext(TicTacToeContext)
    useEffect(() => {
        setComputer(player === 'X' ? 'O' : 'X')
    }), [player]
     
    const chooseFreeSpace = (board) => {
        const emptyCells = board
          .map((cell, index) => (cell == null ? index : null))
          .filter((index) => index !== null);
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
      };
      
      useEffect(() => {
        if(turn === 'computadora' && winner == null){
      
              const freeIndex = chooseFreeSpace(board);
              handleBoardInput(freeIndex, computer);
       
        }
      }, [winner, turn])
    
  return (
    <></>
  )
}

export default Computer