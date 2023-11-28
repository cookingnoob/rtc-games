import React, { useEffect } from 'react'
//escoge el valor de la computadora y juega

const useComputer = (player, {setText, setComputer}) => {
    if (player === null) {
        setText("no hay jugador");
      } else if (player === "X") {
        setComputer("O");
      } else if (player === "O") {
        setComputer("X");
      }

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
    <div>useComputer</div>
  )
}

export default useComputer