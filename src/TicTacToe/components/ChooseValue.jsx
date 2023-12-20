import  { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';
import usePlayerValueTTT from '../hooks/usePlayerValueTTT';

const ChooseValue = () => {
  const {player} = useContext(TicTacToeContext)
  const choosePlayerValue = usePlayerValueTTT();

  return (
    //two buttons so the player can choose a value, the computer will take the other value
    <div className='ticValueButtons'>
    {player == null ? <> 
        <button onClick={() => choosePlayerValue('X')} value={"X"} className="checkerValue"> X </button>
        <button onClick={() => choosePlayerValue('O')} value={"O"} className="checkerValue"> O </button>
    </>
    : <></>}
       
    </div>
  )
}

export default ChooseValue