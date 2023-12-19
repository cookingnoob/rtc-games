import React, { useCallback, useContext } from 'react'
import ChooseValue from './ChooseValue';
import StartGame from './StartGame';
import PlayingWindow from './PlayingWindow';
import { TicTacToeContext } from '../TicTacToeContext';

const StartWindow = () => {
    const{setText, board, setBoard,player,setTurn,turn,winningCombinations,winner,setWinner,text} = useContext(TicTacToeContext)
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
          setText('Turno del jugador')
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
    <div className="ticPlayingWindow">
    <h1 className="gameTitle">Tic Tac Toe</h1>
    <h2 className="instructionText">{text}</h2>
   <ChooseValue />
   <StartGame />
   <PlayingWindow  handleBoardInput={handleBoardInput}/>
  </div>
    
  )
}


export default StartWindow