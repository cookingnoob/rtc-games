import{ useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';

const usePlayerValueTTT = () => {
    const {setPlayer, setText, setComputer} = useContext(TicTacToeContext)
  //sets player, computer and text states
    const choosePlayerValue = (value) => {
        setPlayer(value);
        setComputer(value === 'X' ? 'O' : 'X')
        setText(`Has escogido ${value}`)
      };

  return choosePlayerValue
}

export default usePlayerValueTTT