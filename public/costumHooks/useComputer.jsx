import React, { useEffect } from 'react'

const useComputer = ({player, board, setText, setComputer}) => {
    const computerValue = (player) => {
        if (player === null) {
          setText("no hay jugador");
        } else if (player === "X") {
          setComputer("O");
        } else if (player === "O") {
          setComputer("X");
        }
      };

      const chooseFreeSpace = (board) => {
        const emptyCells = board
          .map((cell, index) => (cell == null ? index : null))
          .filter((index) => index !== null);
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
      };

      useEffect(() => {
        setTimeout(() => {
          if(turn === 'computadora'){
            const freeIndex = chooseFreeSpace(board);
            handleBoardInput(freeIndex, computer);
          }
        }, 1000);
      }, [board, handleBoardInput, turn])

  return (
    <></>
  )
}

export default useComputer