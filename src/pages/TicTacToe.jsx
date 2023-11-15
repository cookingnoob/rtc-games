import React, { useState } from 'react'

const TicTacToe = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])

  const handleClick = (index) => {
    if (board[index] != null) {
      return
    }
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <button>Inicia la partida</button> <br />
      <button>X</button>
      <button>O</button>
      <h2>Es turno de ____</h2>
      <br />
      <div className='board'>
        {board.map((cell, index) => {
          return <button key={index} onClick={() => handleClick(index)} value={cell}>{cell}</button>
        })}
      </div>
    </>
  )
}

export default TicTacToe
//un estado que es un array que crea 9 valores que son ''
//useState([[],])
//se crea una celda por cada valor del array
//estado de isStarted que crea todos los valores a ''
//un estado que define que valor tiene el jugador y cual la computadora
//


{/* {fila.map((tira, tiraIndex) => {
        return tira.map((celda, index) => {
       return <button key={`${tiraIndex}-${index}`}></button>
        })
     })} */}