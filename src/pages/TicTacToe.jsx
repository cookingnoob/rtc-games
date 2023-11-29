import { useEffect, useRef, useState, useCallback } from "react";
import StartMatch from "../components/StartMatch";
import ChooseValue from "../components/ChooseValue";
import useTurn from "../hooks/useTurn";
import useComputer from "../hooks/useComputer";

const TicTacToe = () => {
  const [board, setBoard] = useState([1,2,3, 4, 5,6,7, 8,9,]);
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null)
  const [text, setText] = useState("Escoge una ficha");
  const [turn, setTurn] = useState(null);
  const [winner, setWinner] = useState(null);

// useTurn()

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
      <ChooseValue setPlayer={setPlayer} setText={setText} setComputer={setComputer}/>
      ) : (
        <>
       <button onClick={resetGame}>Reinicia el juego </button>
       <br />
       <StartMatch turn={turn} setTurn={setTurn} setText={setText} />
       </>
      )}
      <h2>{text}</h2>
      <br />
      <div className="board">
        {board.map((cell, index) => {
          return (
            <button key={index} onClick={() =>console.log(board[index])} value={cell} className="cell">{cell}</button>
          );
        })}
      </div>
    </>
  );
};


export default TicTacToe;