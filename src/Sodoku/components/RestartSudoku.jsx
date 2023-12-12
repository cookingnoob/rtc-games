import React from 'react'

const RestartSudoku = ({copyOfSudoku,setSudokuBoard }) => {

    const handleRestart = () => {
    setSudokuBoard(copyOfSudoku)
    }

  return (
    <>
    <button onClick={handleRestart}>Reinicia el Sudoku</button>
    </>
  )
}

export default RestartSudoku