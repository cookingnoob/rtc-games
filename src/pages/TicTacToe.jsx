import React, { useEffect, useRef, useState } from 'react'
import ResetTicTacToe from '../components/ResetTicTacToe';

const TicTacToe = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  const [text, setText] = useState('Escoge una ficha');
  const player = useRef(null);
  const computer = useRef(null);

  const choosePlayerValue = (e) => {
    player.current = e.target.value;
    computerValue(player);
    console.log(player.current)
  }

  const computerValue = (player) => { 
    if (player.current === null){
      setText('no hay jugador')
    } else if(player.current === 'X'){
      return computer.current = 'O'
    } else if (player.current === 'O'){
      return computer.current = 'X'
    }
  }


  const handleTurn = (index, currentPlayer) => {
    if (board[index] !== null && currentPlayer == player.current) {
      return
    } else if (board[index] !== null && currentPlayer == computer.current){
      computerTurn()
    }else if (player.current == null){
      setText('no has escogido una ficha');
      return
    }
    setText(`Es turno de ${currentPlayer}`)
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    console.log(board);
    if(currentPlayer == player.current){
      computerTurn()
    }
  };

  const computerTurn = () => {
    let index = Math.floor(Math.random() * 9);
    handleTurn(index, computer.current)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ResetTicTacToe setBoard={setBoard} setText={setText} player={player} computer={computer}/>
      {player.current === null ?    
                  <div>    
                    <button onClick={choosePlayerValue} value={'X'} className='checkerValue'>X</button>
                    <button onClick={choosePlayerValue} value={'O'} className='checkerValue'>O</button> 
                  </div> :
                   <></>
    }
      <h2>{text}</h2>
      <br />
      <div className='board'>
        {board.map((cell, index) => {
          return <button key={index} onClick={() => handleTurn(index, player.current)} value={cell} className='cell'>{cell}</button>
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