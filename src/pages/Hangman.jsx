import React, { useState } from 'react'

const Hangman = () => {
  const [word, setWord] = useState('');
  const [input, setInput] = useState('')
  const listOfWords = ['celular', 'spiderman', 'nintendo', 'teclado']


  //obtener la palabra que se va a adivinar
    //no debe re renderizarse todo el tiempo 
    //solo si ganaste o perdiste
    
    const randomNumber = Math.floor(Math.random() * listOfWords.length)
    const getWord = `${listOfWords.filter((word, index) => index == randomNumber)}`;

  //tratamiento de la palabra
    //separarla en partes
    //cambiar algunas letras por _ de forma aleatorea
    //devolver la palabra a sus partes
    //poner esta palabra en el texto que sale

    const splitWord = getWord.split("");
  
    const handleInput = (e) => {
      setInput(e.target.value)
    }

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
    <h2>{splitWord}</h2>
    <h3>❌ ❌ ❌ || ✅ ✅ ✅</h3>
    <h4>pista</h4>
    <input type="text" placeholder='espacio para adivinar' onChange={handleInput}/>
    <button>respuesta</button>
    </>
  )
}

export default Hangman