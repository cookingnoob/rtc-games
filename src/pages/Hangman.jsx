import React, { useMemo, useState } from 'react'

const Hangman = () => {
  const [word, setWord] = useState([]);

  const [input, setInput] = useState(null);
  const [strike, setStrike] = useState(null)

  const listOfWords = ['celular', 'spiderman', 'nintendo', 'teclado']


  //escoge aleatoreamente una palabra del array  listOfWords y la define en el estado word
  //la dependencia a escuchar deberia ser la de ganar o perder
    const getWord = useMemo(() =>{
      const randomNumber = Math.floor(Math.random() * listOfWords.length)
      const selectWord = listOfWords.filter((word, index) => index == randomNumber).toString().split('')
      setWord(selectWord)
    }, []);
 


  
    const handleInput = (e) => {
      setInput(e.target.value)
    }

  return (
    <>
    <h1>Ahorcado</h1>
    <h2>{word}</h2>
    <h3>❌ ❌ ❌ || ✅ ✅ ✅</h3>
    <h4>{}</h4>
    {word != null ?
    word.map((letter, index) =>{
       return <input type="text" placeholder='' key={index} onChange={handleInput}/>
      }
    ):
    <p>hola</p>}
    <button>respuesta</button>
    </>
  )
}

export default Hangman