const Board = ({sudokuBoard }) => {



//tengo que cambiar el valor del array original
  return (
   <div className="sudokuBoard">
    {sudokuBoard.map((grid, gridIndex) => {
      return <div className='sudokuGrid' key={gridIndex}>
          
          {grid.map((cell, cellIndex) => {
            const uniqueIndex = `grid-${gridIndex}-cell${cellIndex}`
            return <button key={uniqueIndex} className='sudokuCell' value={cell} >{cell}</button>
          })}
      </div>
    })}
    </div>
  )
}

export default Board
