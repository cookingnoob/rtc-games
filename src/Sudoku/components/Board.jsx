const Board = ({sudokuBoard, setGridIndex, setCellIndex, setText}) => {

const handleSudokuClick = (gridIndex, cellIndex) => {
  setGridIndex(gridIndex)
  setCellIndex(cellIndex)
  setText('Selecciona un número')
}

  return (
    <div className="sudokuContainer"> 
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
