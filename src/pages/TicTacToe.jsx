import React, { useEffect, useRef, useState } from 'react'
import ResetTicTacToe from '../components/ResetTicTacToe';

const TicTacToe = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  const [text, setText] = useState('Escoge una ficha');
  const player = useRef(null);
  const computer = useRef(null);


      //tiene que escoger un numero aleatorio del array y de ahi pasar el valor de la computadora
  const computerTurn = () => {
  console.log(computer.current)
  }

  const choosePlayerValue = (e) => {
    player.current = e.target.value;
    computerValue(player);
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


  const handleBoardClick = (index) => {
    if (board[index] != null) {
      return
    } else if (player.current == null){
      setText('no has escogido una ficha')
    }
    const newBoard = [...board];
    //cambiar este a current value para que quien pase el valor del jugador sea el click
    newBoard[index] = player.current;
    setBoard(newBoard);
    computerTurn()
  };

  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ResetTicTacToe setBoard={setBoard} setText={setText}/>
     
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