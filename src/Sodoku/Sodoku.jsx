import React, { useEffect, useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';
const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);

useEffect(() => {
  const newBoard = makepuzzle();
  setSudokuBoard(newBoard);
}, []);


  return (
    <>
    <h1>Sudoku</h1>
  {sudokuBoard == null ? 
  <>
  </> 
  : 
  // por cada 9 celdas se crea un div que contenga un tablero - en vez de que sea una fila
  <div className="sudokuBoard">
   
  {sudokuBoard.map((cell, index) => { 
    return (
      <button key={index}  value={cell} className="sudokuCell">{index}</button>
    );
  })}
</div>}
    </>
  )
}

export default Sodoku