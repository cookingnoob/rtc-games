const Board = ({sudokuBoard }) => {

const handleSudokuClick = (gridIndex, cellIndex) => {
  console.log(`grid: ${gridIndex} cell: ${cellIndex}`)
  console.log(sudokuBoard[gridIndex][cellIndex])
}


//tengo que cambiar el valor del array original
  return (
   <div className="sudokuBoard">
    {sudokuBoard.map((grid, gridIndex) => {
      return <div className='sudokuGrid' key={gridIndex}>
          
          {grid.map((cell, cellIndex) => {
            const uniqueIndex = `grid-${gridIndex}-cell${cellIndex}`
            return <button key={uniqueIndex} className='sudokuCell' value={cell} onClick={() => handleSudokuClick(gridIndex, cellIndex)}>{cell}</button>
          })}
      </div>
    })}
    </div>
  )
}

export default Board
//sudokuBoard[0][0]