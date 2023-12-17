const StartSudoku = ({setCopyOfSudoku, setSudokuBoard, setText, buttonName}) => {

  const startSudoku = async () => {
   try{
    const response = await fetch('https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}')
    const data = await response.json();
    const grids = data.newboard.grids[0].value;
    const modifiedArray = grids.map((grid) => grid.map((cell) => cell == 0 ? null : cell))
    setSudokuBoard(modifiedArray)
    setCopyOfSudoku([...grids.map((grid) => grid.map((cell) => cell == 0 ? null : cell))])
    setText('Selecciona una casilla')
    console.log(modifiedArray)
   }catch(error){
    setText('hubo un problema')
   } 
  }

  return (
    <button onClick={startSudoku}>{buttonName}</button>
  )
}

export default StartSudoku

 // const newBoard = makepuzzle();
  // const gridArrays = [newBoard.slice(0,9), newBoard.slice(9,18),newBoard.slice(18,27), newBoard.slice(27,36),newBoard.slice(36,45), newBoard.slice(45,54),newBoard.slice(54,63), newBoard.slice(63,72),newBoard.slice(72,81)];
        // const copyGridArrays = [newBoard.slice(0,9), newBoard.slice(9,18),newBoard.slice(18,27), newBoard.slice(27,36),newBoard.slice(36,45), newBoard.slice(45,54),newBoard.slice(54,63), newBoard.slice(63,72),newBoard.slice(72,81)];
