import { useRef, useState } from "react";
import ResetTicTacToe from "../components/ResetTicTacToe";

//necesito crear algo que inicie el juego aleatoriamente en mi turno o el de computadora
//revisar que computadora o jugador hicieron su movimiento para activar el siguiente

const TicTacToe = () => {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [text, setText] = useState("Escoge una ficha");
  const [turn, setTurn] = useState(null);
  const player = useRef(null);
  const computer = useRef(null);

  const choosePlayerValue = (value) => {
    player.current = value;
    computerValue(player);
    gameStart();
  };

  const computerValue = (player) => {
    if (player.current === null) {
      setText("no hay jugador");
    } else if (player.current === "X") {
      return (computer.current = "O");
    } else if (player.current === "O") {
      return (computer.current = "X");
    }
  };

  /**
   * Elegir aleatoriamente quién empieza el juego
   */
  const gameStart = () => {
    if (turn == null) {
      /*
        Math.random = [0,1)
        Math.random * 2 = [0,2)
        Math.floor(Math.random * 2) = {0,1}
      */
      let randomNumber = Math.floor(Math.random() * 2);
      if (randomNumber === 0) {
        setTurn("computadora");
        setText("La computadora comienza la partida");
        computerTurn()
      } else {
        setTurn("player");
        setText("El jugador comienza la partida");
      }
    }
  };

  const chooseFreeSpace = (board) => {
    const emptyCells = board
      .map((cell, index) => (cell == null ? index : null))
      .filter((index) => index !== null);
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  };

  const computerTurn = () => {
    const freeIndex = chooseFreeSpace(board);
    handleBoardInput(freeIndex, computer.current);
  };

  const handleBoardInput = (index, currentPlayer) => {
    if (board[index] !== null) {
      return;
    } else if (player.current == null) {
      setText("no has escogido una ficha");
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    /**
     * Cuando el jugador en turno selecciona su casilla, el turno se pasa al otro
     */
    if (turn === 'computadora'){
      passTurnTo('player')
    } else if (turn === 'player'){
      passTurnTo('computadora')
      computerTurn()
    }
    
  };

  /**
   * Passes the turn to `nextPlayer`, updating state and messages
   */
  const passTurnTo = (nextPlayer) => {
    if (nextPlayer === null) {
      return;
    } else if (nextPlayer === "computadora") {
      setTurn("computadora");
      setText('Turno de la computadora')
    } else if (nextPlayer === "player") {
      setTurn("player");
      setText('Turno del player')
    }
  };

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
            onClick={() => choosePlayerValue('X')}
            value={"X"}
            className="checkerValue"
          >
            X
          </button>
          <button
            onClick={() => choosePlayerValue('O')}
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
                handleBoardInput(index, player.current);
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
};

export default TicTacToe;
