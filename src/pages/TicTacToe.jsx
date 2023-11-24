import React, { useEffect, useRef, useState } from 'react'
import ResetTicTacToe from '../components/ResetTicTacToe';

//necesito crear algo que inicie el juego aleatoriamente en mi turno o el de computadora
//revisar que computadora o jugador hicieron su movimiento para activar el siguiente

const TicTacToe = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  const [text, setText] = useState('Escoge una ficha');
  const [turn, setTurn] = useState(null)
  const player = useRef(null);
  const computer = useRef(null);

  const choosePlayerValue = (e) => {
    player.current = e.target.value;
    computerValue(player);
    handleTurns()
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


  const handleBoardInput = (index, currentPlayer) => {
    if (board[index] !== null) {
      return
    } else if (player.current == null){
      setText('no has escogido una ficha');
      return
    }
    setText(`Es turno de ${currentPlayer}`)
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    console.log(turn)
  };

  const computerTurn = () => {
    let index = Math.floor(Math.random() * 9);
    board[index] == null ? handleBoardInput(index, computer.current) : computerTurn();
  }

  const handleTurns = () => {
    if(turn == null){
      let randomNumber = Math.floor(Math.random() * 10);
      if(randomNumber < 5){
        setTurn(computer.current);
        setText('turno de computadora')
      } else {
        setTurn(player.current), 
        setText('turno de jugador')
      }
                         
      
    }
    
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
          return <button key={index} onClick={() => handleBoardInput(index, player.current)} value={cell} className='cell'>{cell}</button>
        })}
      </div>
    </>
  )
}

export default TicTacToe
