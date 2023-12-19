const Board = ({sudokuBoard, setGridIndex, setCellIndex, setText}) => {

const handleSudokuClick = (gridIndex, cellIndex) => {
  setGridIndex(gridIndex)
  setCellIndex(cellIndex)
  setText('Selecciona un número')
}

  return (
    <div className="sudokuContainer"> 
     {sudokuBoard.map((grid, gridIndex) => {
      // If gridIndex is multiple of three, add a small div to divide each of the 3x3 grid rows
      return <div key={`gridHolder ${gridIndex}`}> 
      <div className='sudokuGrid' key={`gridIndex-${gridIndex}`}>
       
          {grid.map((cell, cellIndex) => {
            
            const uniqueIndex = `grid-${gridIndex}-cell${cellIndex}`
            // If cellIndex is multiple of three, add a small div to divide the 3x3 grids
            return <div key={`cellHolder ${cellIndex}`}> 
            <button key={uniqueIndex} className='sudokuCell' value={cell} onClick={() => handleSudokuClick(gridIndex, cellIndex)}>{cell}</button>
            { (cellIndex+1) % 3 === 0 ? <div key={`columnSpace-${cellIndex}`} className="columnSpace"> </div> : <></>}
            </div> 
          })}
       </div>
       {(gridIndex + 1) % 3 === 0 ? <div key={`rowSpace-${gridIndex}`} className="rowSpace"> </div> : <></>}
       </div>
    })} 
  
    </div>
  )
}

export default Board

// const { playNumber } = usePlayNumber();

