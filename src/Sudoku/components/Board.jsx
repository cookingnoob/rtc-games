import { useContext } from "react"
import { SudokuContext } from "../SudokuContext"
import usePlayNumber from "../hooks/usePlayNumber"

const Board = () => {
const {sudokuBoard} = useContext(SudokuContext)
const {handleSudokuClick} = usePlayNumber()

  return (
    //box that contains the whole sudoku
    <div className="sudokuContainer">
      {/* maps the sudoku array to make first level of arrays, the grids of the board  */}
        {sudokuBoard.map((grid, gridIndex) => {
          
            return <div key={`gridHolder ${gridIndex}`}> 
              <div className='sudokuGrid' key={`gridIndex-${gridIndex}`}>

              {/* maps the grid arrays to create the 9 cells */}
                {grid.map((cell, cellIndex) => {
                  const uniqueIndex = `grid-${gridIndex}-cell${cellIndex}`
                  return <div key={`cellHolder ${cellIndex}`}> 
                  <button key={uniqueIndex} className='sudokuCell' value={cell} 
                  onClick={() => handleSudokuClick(gridIndex, cellIndex)}>{cell}</button>
                  
                {/* if the cell index is 2 or 5 creates a div to visually separate the grids */}
                  { cellIndex == 2 || cellIndex == 5 ? <div key={`columnSpace-${cellIndex}`} className="columnSpace"></div> : <></>}
                </div> 
              })}
          </div>

          {/* if the grid is divisible by 3 it creates a div to separate the grids */}
          {(gridIndex + 1) % 3 === 0 ? <div key={`rowSpace-${gridIndex}`} className="rowSpace"> </div> : <></>}
          </div>
      })} 
    </div>
  )
}

export default Board


