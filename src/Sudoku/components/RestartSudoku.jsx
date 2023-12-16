import React from 'react'

const RestartSudoku = ({copyOfSudoku,setSudokuBoard, setCopyOfSudoku }) => {

    const handleRestart = () => {
    const copyOfCopy = JSON.parse(JSON.stringify(copyOfSudoku));
    setSudokuBoard(copyOfCopy)
    }

  return (
    <>
    <button onClick={handleRestart}>Reinicia el Sudoku</button>
    </>
  )
}

export default RestartSudoku