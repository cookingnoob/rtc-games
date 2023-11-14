import React, { useState } from 'react'

const TicTacToe = () => {
   const [casilla, setCasilla] =  useState([[0, null, null], 
                                            [null, null, null],
                                            [null, null, null]])

    console.log(casilla.forEach(element => element.forEach(e => console.log(e))))

  return (
    <>
     <h1>Tic Tac Toe</h1>
    <button>Inicia la partida</button> <br />
    <button>X</button>
    <button>O</button>
    <h2>Es turno de ____</h2>
    <br />
    <button value={casilla[0][0]}>{casilla[0][0]}</button> <button></button> <button></button>
    <button></button> <button></button> <button></button>
    <button></button><button></button><button></button>
    </>
  )
}

export default TicTacToe
//un estado que es un array que crea 9 valores que son ''
//useState([[],])
//se crea una celda por cada valor del array
//estado de isStarted que crea todos los valores a ''
//un estado que define que valor tiene el jugador y cual la computadora
//
