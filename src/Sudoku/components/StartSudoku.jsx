import React from 'react'

const StartSudoku = ({makepuzzle,setCopyOfSudoku, setSudokuBoard, setText, buttonName}) => {

  const startSudoku= () => {
    const newBoard = makepuzzle();
        const gridArrays = [newBoard.slice(0,9), newBoard.slice(9,18),newBoard.slice(18,27), newBoard.slice(27,36),newBoard.slice(36,45), newBoard.slice(45,54),newBoard.slice(54,63), newBoard.slice(63,72),newBoard.slice(72,81)];
        const copyGridArrays = [newBoard.slice(0,9), newBoard.slice(9,18),newBoard.slice(18,27), newBoard.slice(27,36),newBoard.slice(36,45), newBoard.slice(45,54),newBoard.slice(54,63), newBoard.slice(63,72),newBoard.slice(72,81)];
        setSudokuBoard(gridArrays);
        setCopyOfSudoku([...copyGridArrays])
        setText('Selecciona una casilla')
  }

  return (
    <button onClick={startSudoku}>{buttonName}</button>
  )
}

export default StartSudoku