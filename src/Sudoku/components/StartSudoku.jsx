import { useContext, useState } from "react";
import { SudokuContext } from "../SudokuContext";
import { LoginContext } from "../../Login/LoginContext";

const StartSudoku = ({buttonName}) => {
  const [loading, setLoading] = useState(false)
  const {setCopyOfSudoku,setSolution, setSudokuBoard, sudokuBoard, setText} = useContext(SudokuContext)
  const {user} = useContext(LoginContext)

  const startSudoku = async () => {
    if(sudokuBoard !== null){
      setText('Cargando el Sudoku, espera ⏳')
      setSudokuBoard(null)
    }
   setLoading(true)
   try{
    const response = await fetch('https://sudoku-api.vercel.app/api/dosuku')
    const data = await response.json();
    const grids = data.newboard.grids[0].value;
    const modifiedArray = grids.map((grid) => grid.map((cell) => cell == 0 ? null : cell))
    setSudokuBoard(modifiedArray)
    setCopyOfSudoku([...grids.map((grid) => grid.map((cell) => cell == 0 ? null : cell))])
    setSolution(data.newboard.grids[0].solution)
    setText(`${user.name} selecciona una casilla`)
   }catch(error){
    setText('hubo un con el servidor, intenta más tarde')
   } finally{
    setLoading(false)
   }
  }

  return (
    <>
   {loading && <h1>Cargando el Sudoku, espera ⏳</h1>}
   <button onClick={startSudoku} disabled={loading}>{buttonName}</button>
    </>
  )
}

export default StartSudoku
