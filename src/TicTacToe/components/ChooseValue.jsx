import React from 'react'

const ChooseValue = ({setPlayer, setText, player}) => {
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