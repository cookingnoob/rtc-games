import { useEffect, useState, useCallback } from "react";
import ChooseValue from "./components/ChooseValue";
import ResetButton from "./components/ResetButton";
import Computer from "./components/Computer";
import StartGame from "./components/StartGame";
import Board from "./components/Board";
import PlayingWindow from "./components/PlayingWindow";

const TicTacToe = () => {
  const [board, setBoard] = useState([null,null,null, null, null,null,null, null,null,]);

  const [player, setPlayer] = useState(null);

  const [computer, setComputer] = useState(null)

  const [text, setText] = useState("Escoge una ficha");

  const [turn, setTurn] = useState(null);

  const [winner, setWinner] = useState(null);
  
  const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];


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

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>{text}</h2>
     <ChooseValue setText={setText} setPlayer={setPlayer} player={player}/>
     <StartGame turn={turn} setTurn={setTurn}  setText={setText} player={player}/>
      <PlayingWindow setComputer={setComputer} player={player} handleBoardInput={handleBoardInput} computer={computer} board={board} winner={winner} turn={turn} setBoard={setBoard} setPlayer={setPlayer}  setText={setText}  setTurn={setTurn} setWinner={setWinner} />
    </>
  );
};


export default TicTacToe;