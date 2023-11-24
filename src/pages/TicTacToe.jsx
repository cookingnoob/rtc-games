import React, { useEffect, useRef, useState } from 'react'
import ResetTicTacToe from '../components/ResetTicTacToe';

const TicTacToe = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  // const [player, setPlayer] = useState(null);
  // const [computer, setComputer] = useState(null);
  const [text, setText] = useState('Escoge una ficha');

  const player = useRef(null);
  const computer = useRef(null);

    const computerValue = (player) => { 
      if (player === null){
        setText('no hay jugador')
      } else if(player === 'X'){
        return computer.current = 'O'
      } else if (player === 'O'){
        return computer.current = 'X'
      }
    }

  const computerTurn = () => {
    board.map((cell, index) => {
      if (cell != null){
        return
      }else if (cell == null){
        const newBoardTwo = [...board];
        newBoardTwo[index] = computer;
        setBoard(newBoardTwo)
      }
    })
  }

  const handleBoardClick = (index) => {
    if (board[index] != null) {
      return
    } else if (player == null){
      setText('no has escogido una ficha')
    }
    const newBoard = [...board];
    newBoard[index] = player.current;
    setBoard(newBoard);

  };

  const choosePlayerValue = (e) => {
    player.current = e.target.value;
    computerValue(player);
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ResetTicTacToe setBoard={setBoard} setText={setText}/>
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