import { useState } from "react";

const StartSudoku = ({setCopyOfSudoku,setSolution, setSudokuBoard, setText, buttonName}) => {
  const [loading, setLoading] = useState(false)

  const startSudoku = async () => {
   setLoading(true)
   try{
    const response = await fetch('https://sudoku-api.vercel.app/api/dosuku')
    const data = await response.json();
    const grids = data.newboard.grids[0].value;
    const modifiedArray = grids.map((grid) => grid.map((cell) => cell == 0 ? null : cell))
    setSudokuBoard(modifiedArray)
    setCopyOfSudoku([...grids.map((grid) => grid.map((cell) => cell == 0 ? null : cell))])
    setSolution(data.newboard.grids[0].solution)
    setText('Selecciona una casilla')
   }catch(error){
    setText('hubo un con el servidor, intenta más tarde')
   } finally{
    setLoading(false)
   }
  }

  return (
    <>
    {loading ? setText('Cargando el Sudoku, espera ⏳') : <></>}
    <button onClick={startSudoku}>{buttonName}</button>
    </>
  )
}

export default StartSudoku

 // const newBoard = makepuzzle();
  // const gridArrays = [newBoard.slice(0,9), newBoard.slice(9,18),newBoard.slice(18,27), newBoard.slice(27,36),newBoard.slice(36,45), newBoard.slice(45,54),newBoard.slice(54,63), newBoard.slice(63,72),newBoard.slice(72,81)];
        // const copyGridArrays = [newBoard.slice(0,9), newBoard.slice(9,18),newBoard.slice(18,27), newBoard.slice(27,36),newBoard.slice(36,45), newBoard.slice(45,54),newBoard.slice(54,63), newBoard.slice(63,72),newBoard.slice(72,81)];
