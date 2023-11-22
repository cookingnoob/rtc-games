import React from 'react'

const ResetTicTacToe = ({setBoard, setComputer, setPlayer, setText}) => {
    const resetGame = () => {
        setBoard([null, null, null, null, null, null, null, null, null])
        setPlayer(null)
        setComputer(null)
        setText('Escoge una ficha')
      }
  return (
    <>
    <button onClick={resetGame}>Inicia la partida</button> <br />
    </>
  )
}

export default ResetTicTacToe