import React, { useState } from 'react'

const TicTacToe = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null)
  const [text, setText] = useState('Escoge una ficha');

  const handleBoardClick = (index) => {
    if (board[index] != null) {
      return
    } else if (player == null){
      setText('no has escogido una ficha')
    }
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard)
  }

  const computerValue = () => {
    if (player === 'X'){
      setComputer('O');
      console.log(computer)
    }else if (player === 'O'){
      setComputer('X');
      console.log(computer)
    }
  }

  const choosePlayerValue = (e) => {
    setPlayer(e.target.value)
    computerValue()
  }

  const resetGame = () => {
    setBoard([null, null, null, null, null, null, null, null, null])
    setPlayer(null)
    setText('Escoge una ficha')
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Inicia la partida</button> <br />
      <button onClick={choosePlayerValue} value={'X'} className='checkerValue'>X</button>
      <button onClick={choosePlayerValue} value={'O'} className='checkerValue'>O</button>
      <h2>{text}</h2>
      <br />
      <div className='board'>
        {board.map((cell, index) => {
          return <button key={index} onClick={() => handleBoardClick(index)} value={cell} className='cell'>{cell}</button>
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