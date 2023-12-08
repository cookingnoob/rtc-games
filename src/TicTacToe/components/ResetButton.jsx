import React from 'react'

const ResetButton = ({setBoard, setPlayer, setComputer, setText, setTurn, setWinner}) => {
    const resetGame = () => {
        setBoard([null, null, null, null, null, null, null, null, null])
        setPlayer(null);
        setComputer(null);
        setText('Escoge una ficha');
        setTurn(null);
        setWinner(null)
      }
  return (
    <>
        <button onClick={resetGame}>Reinicia el juego </button>
    </>
  )
}

export default ResetButton