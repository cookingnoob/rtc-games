import  { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';
import usePlayerValueTTT from '../hooks/usePlayerValueTTT';

const ChooseValue = () => {
  const {player} = useContext(TicTacToeContext)
  const choosePlayerValue = usePlayerValueTTT();

  return (
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