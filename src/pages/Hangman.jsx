import React, { useState } from 'react'

const Hangman = () => {
  const [words, setWords] = useState(['celular', 'spiderman', 'nintendo', 'teclado'])
  

 
    const randomNumber = Math.floor(Math.random() * words.length)
    const getWord = words.filter((word, index) => index == randomNumber)
    console.log(getWord)

    //lista de palabras en un estado
        //Se escoge aleatoreamente una palabra
        //se separa el string por cada caracter
        //aleatoreamente se muestran algunas letras y las que no se convierten en _ 
    //
    //un estado para los errores que vuelve a 0 cuando te va bien
    // un estado que lleve cuenta de las victorias, con 3 ganas el juego
  return (
    <>
    <h1>Ahorcado</h1>
    <h2>{getWord}</h2>
    <h3>❌ ❌ ❌ || ✅ ✅ ✅</h3>
    <h4>pista</h4>
    <input type="text" placeholder='espacio para adivinar' />
    </>
  )
}

export default Hangman