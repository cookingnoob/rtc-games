import React, { useState } from 'react'

const TicTacToe = () => {
   const [fila, setFila] =  useState([[null, null, null], 
                                      [null, null, null],
                                      [null, null, null]])

//    fila.map((tira, tiraIndex) => {
//     tira.map((celda, index) => {
//         console.log(`celda ${celda} tira ${tiraIndex}index ${index}`)
//     })
//    })

  return (
    <>
     <h1>Tic Tac Toe</h1>
    <button>Inicia la partida</button> <br />
    <button>X</button>
    <button>O</button>
    <h2>Es turno de ____</h2>
    <br />
   <div className='board'>
    {fila.map((tira, tiraIndex) => {
        return tira.map((celda, index) => {
       return <button key={`${tiraIndex}-${index}`}></button>
        })
     })}
   </div>
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
