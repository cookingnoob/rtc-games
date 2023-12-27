import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';
import { LoginContext } from '../../Login/LoginContext';
import useLocalUser from '../../Login/hooks/useLocalUser';

const useStartGame = () => {
    const {setTurn, setText} = useContext(TicTacToeContext)
    const {user} = useContext(LoginContext)
    useLocalUser()
//randomly chooses who begins the match, sets the turn and text states 
  const gameStart = () => {
      let randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 0) {
          setTurn("computadora");
          setText("La computadora comienza la partida");
        } else {
          setTurn("player");
          setText(`${user.name} comienza la partida`);
            }
    };
  return {gameStart}
}

export default useStartGame