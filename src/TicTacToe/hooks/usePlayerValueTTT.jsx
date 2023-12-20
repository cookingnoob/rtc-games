import{ useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';

const usePlayerValueTTT = () => {
    const {setPlayer, setText, player} = useContext(TicTacToeContext)

    const choosePlayerValue = (value) => {
        setPlayer(value);
        setText(`Has escogido ${value}`)
      };

  return choosePlayerValue
}

export default usePlayerValueTTT