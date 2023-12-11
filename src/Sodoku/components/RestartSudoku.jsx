import React from 'react'

const RestartSudoku = ({originalSudoku, setSudokuBoard}) => {

    const handleRestart = () => {
        setSudokuBoard(originalSudoku)
   
    }

  return (
    <>
    <button onClick={handleRestart}>Reinicia el Sudoku</button>
    </>
  )
}

export default RestartSudoku