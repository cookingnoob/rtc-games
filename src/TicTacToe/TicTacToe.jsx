import { useEffect, useState, useCallback } from "react";
import ChooseValue from "./components/ChooseValue";
import ResetButton from "./components/ResetButton";

const TicTacToe = () => {
  const [board, setBoard] = useState([null,null,null, null, null,null,null, null,null,]);

  const [player, setPlayer] = useState(null);

  const [computer, setComputer] = useState(null)

  const [text, setText] = useState("Escoge una ficha");

  const [turn, setTurn] = useState(null);

  const [winner, setWinner] = useState(null);
  
  const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];


  
  //La computadora escoge el valor opuesto al del jugador
const computerValue = (player) => {
  if (player === "X"){
    setComputer("O");
  } else if (player === "O") {
    setComputer("X");
  }
};

//busca casillas disponibles y escoge una al azar
  const chooseFreeSpace = (board) => {
    const emptyCells = board
      .map((cell, index) => (cell == null ? index : null))
      .filter((index) => index !== null);
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  };

//checa si se puede colocar el valor dentro de una casilla y lo cocola y cambia el turno

  const handleBoardInput = useCallback(
    (index, currentPlayer) => {
      if (player == null) {
        setText("Has clic en el botón para iniciar la partida");
        return;
      } else if (board[index] !== null) {
        return;
      } else if(winner != null){
        return
      }

      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

     if (turn === 'computadora'){
        passTurnTo('player')
      } else if (turn === 'player'){
        passTurnTo('computadora')
      }
      checkWinner(newBoard);
      checkTie(newBoard)
    }
  ,[winner, turn]);

  //permite que la computadora pueda poner un valor
  useEffect(() => {
    if(turn === 'computadora' && winner == null){
      setTimeout(() => {
          const freeIndex = chooseFreeSpace(board);
          handleBoardInput(freeIndex, computer);
      }, 1000);
    }
  }, [winner, turn])


//cambia el estado de turno para saber quien esta jugando
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

//Checa si alguien gano
const checkWinner = (board) =>  {
  winningCombinations.forEach(combination => {
      const [a, b, c] = combination;
      if(board[a] != null){
        if(board[a] == board[b] && board[b] == board[c] && board[a] == board[c]){
          if(turn == 'computadora'){
            setWinner('computadora')
            setText(`Ganó la computadora!! 🤖`);
          } else if (turn == 'player'){
            setWinner('jugador')
            setText('Gano el jugador 🧘🏽')
          }}
        }
      }
    )
  }
  
const checkTie = (board) => {
  if(board.every(cell => cell != null)){
    setText('Empate')
  }
}


//inicia la partida dando un turno aleatoreo al jugador o computadora
  const gameStart = () => {
    if (turn == null) {
      let randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 0) {
          setTurn("computadora");
          setText("La computadora comienza la partida");
        } else {
          setTurn("player");
          setText("El jugador comienza la partida");
            }
          }
    };
  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {player === null ? (
        <>
    <ChooseValue setText={setText} setPlayer={setPlayer} computerValue={computerValue}/>
        </>
      ) : (
        <>
       <ResetButton setBoard={setBoard} setPlayer={setPlayer} setComputer={setComputer} setText={setText} setTurn={setTurn} setWinner={setWinner} />
       <br />
       <button onClick={gameStart}>Empieza la partida</button>
       </>
      )}
      <h2>{text}</h2>
      {winner === null ? <></> : <p>ganó {winner}</p>}
      <br />
      <div className="board">
        {board.map((cell, index) => {
          return (
            <button key={index} onClick={() => { handleBoardInput(index, player);}} value={cell} className="cell">{cell}</button>
          );
        })}
      </div>
    </>
  );
};


export default TicTacToe;