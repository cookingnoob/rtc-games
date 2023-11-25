import{ useRef, useState } from 'react'
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
    gameStart()
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

  const gameStart = () => {
    if(turn == null){
      let randomNumber = Math.floor(Math.random() * 2);
      if(randomNumber < 1){
        setTurn('computadora');
        setText('La computadora comienza la partida')
        computerTurn(board)
      } else {
        setTurn('player'),
        setText('El jugador comienza la partida')
      }
    }
  }

  const computerTurn = (board) => {
    const emptyCells = board.map((cell, index) => cell == null ? index : null).filter(index => index !== null)
    let freeIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    playTurn(freeIndex, computer.current)
    passTurn("player")
  }

  const playTurn = (index, currentPlayer) => {
    if (board[index] !== null) {
      return
    } else if (player.current == null){
      setText('no has escogido una ficha');
      return
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
  };

  const passTurn = (turn) =>{
    if(turn === null){
      return
    } else if(turn === 'computadora'){
      setTurn('computadora')
      computerTurn(board)
    } else if (turn === 'player'){
      setTurn('player')
    }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ResetTicTacToe
        setBoard={setBoard}
        setText={setText}
        player={player}
        computer={computer}
        setTurn={setTurn}
      />
      {player.current === null ? (
        <div>
          <button
            onClick={choosePlayerValue}
            value={"X"}
            className="checkerValue"
          >
            X
          </button>
          <button
            onClick={choosePlayerValue}
            value={"O"}
            className="checkerValue"
          >
            O
          </button>
        </div>
      ) : (
        <></>
      )}
      <h2>{text}</h2>
      <br />
      <div className="board">
        {board.map((cell, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                playTurn(index, player.current);
                passTurn("computadora")
              }}
              value={cell}
              className="cell"
            >
              {cell}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default TicTacToe
