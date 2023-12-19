import { createContext, useState } from "react";

export const TicTacToeContext = createContext();

export const TicTacToeProvider = ({children}) => {
    const [board, setBoard] = useState([null,null,null, null, null,null,null, null,null,]);
    const [player, setPlayer] = useState(null);
    const [computer, setComputer] = useState(null)
    const [text, setText] = useState("Escoge una ficha");
    const [turn, setTurn] = useState(null);
    const [winner, setWinner] = useState(null);
    const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];
  
  const contextValue = {
    board, setBoard,player, setPlayer, computer, setComputer,text, setText,turn, setTurn, winner, setWinner, winningCombinations  
  }
  return(<TicTacToeContext.Provider value={contextValue}>
    {children}
  </TicTacToeContext.Provider>
  )
}