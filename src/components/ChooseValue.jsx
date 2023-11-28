import React from 'react'

const ChooseValue = ({setPlayer, setText, setComputer}) => {

    const computerValue = (player) => {
        if (player === "X") {
          setComputer("O");
        } else if (player === "O") {
          setComputer("X");
        }
      };

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