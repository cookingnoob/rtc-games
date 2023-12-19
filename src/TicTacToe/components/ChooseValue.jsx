import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';

const ChooseValue = () => {
  const {setPlayer, setText, player} = useContext(TicTacToeContext)
    const choosePlayerValue = (value) => {
        setPlayer(value);
        setText(`Has escogido ${value}`)
      };

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