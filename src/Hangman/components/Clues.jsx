import React, { useContext, useEffect, useState } from 'react'
import { HangmanContext } from '../HangmanContex'

const Clues = () => {
  const {strike, wordToGuess} = useContext(HangmanContext)
    const [clue, setClue] =useState('')
    useEffect(() => { 
        if(strike === '❌❌❌' || strike === '❌❌❌❌' || strike === '❌❌❌❌❌'){
            switch(wordToGuess){
                case 'celular':
                setClue('Aparato telefónico de pequeño tamaño, portátil, sin hilos ni cables externos, para poder hablar desde cualquier lugar, siempre que sea dentro del área de cobertura del servicio que lo facilita.')
                break;
                case 'paella':
                  setClue('Plato cuyo ingrediente principal es el arroz que se cocina con otros ingredientes como pescado, marisco, ave, carne, verduras, legumbres, etc.; es un plato típico de todas las regiones españolas, sobre todo de Valencia, variando en cada una el tipo y cantidad de ingredientes.')
                  break;
                case 'computadora':
                  setClue('Máquina electrónica capaz de almacenar información y tratarla automáticamente mediante operaciones matemáticas y lógicas controladas por programas informáticos.')
                  break;
                case 'audifonos':
                  setClue('Aparato que consta de dos piezas con unos dispositivos capaces de transformar ondas eléctricas en ondas sonoras y que, unidas por una tira generalmente curva y ajustable a la cabeza, se acoplan a los oídos para la recepción del sonido.')
                  break;
                case 'chocolate':
                  setClue('Sustancia alimenticia que se elabora con una pasta de cacao en polvo y azúcar pulverizado y que se presenta en diversas formas y variedades según los procesos de elaboración utilizados y los ingredientes añadidos.')
                  break;
                case 'huevo':
                  setClue('Cuerpo redondo u ovalado, con una membrana o cáscara exterior, que ponen las hembras de algunos animales y que contiene en su interior el embrión de un nuevo ser y el alimento necesario para que crezca')
                  break;
                case 'guitarra':
                  setClue('Instrumento musical de cuerda formado por una caja hueca de madera de forma alargada con un leve estrechamiento en la parte media, un agujero circular en el centro y un brazo (mástil) a lo largo del cual se prolongan las cuerdas (generalmente seis) y en cuyo extremo se sitúan las clavijas, que permiten afinar el instrumento.')
                  break;
                case 'flauta':
                  setClue('Instrumento musical de viento formado por un tubo cilíndrico con agujeros que se toca soplando por uno de los extremos a la vez que se van tapando y destapando los orificios con los dedos o con llaves')
                  break;
                case 'violin':
                  setClue('Instrumento musical de cuerda de unos 60 cm de largo (mástil incluido) formado por una caja de madera hueca y alargada, con un estrechamiento en la parte media y con dos aberturas acústicas en forma de f en el centro, y un brazo (mástil) corto y sin trastes, a lo largo del cual se prolongan cuatro cuerdas y en cuyo extremo se sitúan las clavijas, que permiten afinar el instrumento; se toca colocándola entre el hombro y el mentón y frotando las cuerdas con un arco.')
                  break;
                case 'libro':
                  setClue('Conjunto de hojas de papel, pergamino, vitela, etc., manuscritas o impresas, unidas por uno de sus lados y normalmente encuadernadas, formando un solo volumen.')
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