import React, { useEffect, useState } from 'react'

const Clues = ({strike, wordToGuess}) => {
    const [clue, setClue] =useState('')
    useEffect(() => { 
        if(strike === '❌❌❌' || strike === '❌❌❌❌' || strike === '❌❌❌❌❌'){
            switch(wordToGuess){
                case 'celular':
                setClue('Aparato telefónico de pequeño tamaño, portátil, sin hilos ni cables externos, para poder hablar desde cualquier lugar, siempre que sea dentro del área de cobertura del servicio que lo facilita.')
                break;
                default:
                setClue('')
            }
            } 
    },[strike, wordToGuess])
 
    
  return (
    <p>{clue}</p>
  )
}

export default Clues