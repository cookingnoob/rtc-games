import React from 'react'

const ChooseValue = ({setPlayer, computerValue, setText}) => {
    const choosePlayerValue = (value) => {
        setPlayer(value);
        computerValue(value)
        setText(`Has escogido ${value}`)
      };

  return (
    <>
        <button onClick={() => choosePlayerValue('X')} value={"X"} className="checkerValue"> X </button>
        <button onClick={() => choosePlayerValue('O')} value={"O"} className="checkerValue"> O </button>
    </>
  )
}

export default ChooseValue