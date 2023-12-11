const Board = ({sudokuBoard, setGrid, setCellIndex}) => {

const handleSudokuClick = (gridIndex, cellIndex) => {
  setGrid(gridIndex)
  setCellIndex(cellIndex)
}

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
