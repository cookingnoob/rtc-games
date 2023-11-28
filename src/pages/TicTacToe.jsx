import { useEffect, useRef, useState, useCallback } from "react";
import StartMatch from "../components/StartMatch";
import ChooseValue from "../components/ChooseValue";

//falta coordinar el orden que se ejecutan los componentes de acuerdo a React
//refactorizar el codigo a componentes

const TicTacToe = () => {
  const [board, setBoard] = useState([null,null,null, null, null,null,null, null,null,]);
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null)
  const [text, setText] = useState("Escoge una ficha");
  const [turn, setTurn] = useState(null);
  const [winner, setWinner] = useState(null);

  // const player = useRef(null);
  // const computer = useRef(null);

//la computadora toma el valor que el usuario no tomo
  const computerValue = (player) => {
    if (player === null) {
      setText("no hay jugador");
    } else if (player === "X") {
      setComputer("O");
    } else if (player === "O") {
      setComputer("X");
    }
  };

//busca en board que celdas estan sin valor para que la computadora puede elegir entre ellas
  const chooseFreeSpace = (board) => {
    const emptyCells = board
      .map((cell, index) => (cell == null ? index : null))
      .filter((index) => index !== null);
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  };


//imprime el valor del jugador actual en el tablero
  const handleBoardInput = useCallback(
    (index, currentPlayer) => {
      if (player == null) {
        setText("no has escogido una ficha");
        return;
      } else if(turn == null){
        setText("Inicia la partida")
        return
      }else if (board[index] !== null) {
        return;
      } 
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      winningConditions(turn, board)
      if(winner != null){
        setText(`Ganó ${winner}`);
        return
      } else if (turn === 'computadora'){
        passTurnTo('player')
      } else if (turn === 'player'){
        passTurnTo('computadora')
      }
    }
  ,[board, turn]);

//hace el turno de la computadora
useEffect(() => {
  setTimeout(() => {
    if(turn === 'computadora'){
      const freeIndex = chooseFreeSpace(board);
      handleBoardInput(freeIndex, computer.current);
    }
  }, 1000);
}, [board, handleBoardInput, turn])

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
// funcion que checa si las combinaciones ganadoras tienen el mismo valor
// si todas las casillas tienen un valor que no es null y nadie gano, declarar empate

    const winningConditions = (turn, board) => {
      const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
  
        [0,3,6],
        [1,4,7],
        [2,5,8],
  
        [0,4,8],
        [2,4,6],
      ];

      winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if(board[a] != null && board[a] == board[b] && board[b] == board[c] && board[a] == board[c]){
          if(turn == 'computadora'){
            setWinner(`🧘🏽`)
          } else if (turn == 'player'){
            setWinner('🤖')
          }
        }
      });

    }

      const resetGame = () => {
          setBoard([null, null, null, null, null, null, null, null, null])
          setPlayer(null);
          setComputer(null);
          setText('Escoge una ficha');
          setTurn(null);
          setWinner(null)
        }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {player === null ? (
      <ChooseValue setPlayer={setPlayer} setText={setText}/>
      ) : (
        <>
       <button onClick={resetGame}>Reinicia el juego </button>
       <br />
       <StartMatch turn={turn} setTurn={setTurn} setText={setText} />
       </>
      )}
      {/* recibe textos de diferentes componentes */}
      <h2>{text}</h2>
      <br />
      {/* crea una celda por cada elemento del estado || recive un valor */}
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