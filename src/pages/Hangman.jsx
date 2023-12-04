import React, { useMemo, useState } from 'react'

const Hangman = () => {
  const [word, setWord] = useState([]);
  const [guess, setGuess] = useState([])
  const [input, setInput] = useState(null);
  const [strike, setStrike] = useState(null)

  //me gustaria cambiar a que sean obejetos con una propiedad de pista para describir el objeto
  const listOfWords = ['celular', 'spiderman', 'nintendo', 'teclado']


  //escoge aleatoreamente una palabra del array  listOfWords y la define en el estado word
  //la dependencia a escuchar deberia ser la de ganar o perder
    const getWord = useMemo(() =>{
      const randomNumber = Math.floor(Math.random() * listOfWords.length)
      const selectWord = listOfWords.filter((word, index) => index == randomNumber).toString().split('')
      setWord(selectWord)
    }, []);
 
  //recorre cada letra de la palabra y decide aleatoreamente que caracteres se quedan y cuales se transforman en _
    const userStartingLetters = useMemo(() => {
      const hideLetters = word.map(letter => {
        let randomNumber = Math.floor(Math.random() * 2);
        if(randomNumber == 0){
          return '_'
        } else {
          return letter
        }
      })
      setGuess(hideLetters)
    }
    ,[])


    const handleInput = (e) => {
      setInput(e.target.value)
    }

    //un submit button que compare las letras de guess con las de word
      //si al menos una letra [i] en guess es igual a la de word, se guarda(n) en el memo
      //si ninguna es igual se da un strike
        //boton submit que onClick
          //compareGuessAndWord 
  return (
    <>
    <h1>Ahorcado</h1>
    <h1>{guess}</h1>
    <h3>❌ ❌ ❌ || ✅ ✅ ✅</h3>
    <div className="inputContainer">
   { 
    guess.map((letter, index) =>{
      if(letter == '_'){ 
     return  <input type="text" key={index} onChange={handleInput} maxLength={1}/> 
      }
      })
    }
      </div>

    <br />
    <button>respuesta</button>
    </>
  )
}

export default Hangman