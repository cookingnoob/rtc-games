import React, { useEffect, useState } from 'react'

const NumbersButtons = ({grid, cellIndex, sudokuBoard, setSudokuBoard}) => {
const [buttonNumbers, setButtonNumbers] = useState([]);
const numbers = [1,2,3,4,5,6,7,8,9];

useEffect(() => {
    if(grid !==''){
        const gridNumbers = numbers.filter(number => !sudokuBoard[grid].includes(number));
        setButtonNumbers(gridNumbers)
    }
}, [grid, sudokuBoard])

const handleNumberClick = (e) => {
    changeArray(e)
    }

    const changeArray = (e) => {
        const arrayToBeChanged = [...sudokuBoard]
        arrayToBeChanged[grid][cellIndex] = Number(e.target.value)
        setSudokuBoard(arrayToBeChanged)
    }
  return (
    <div className='numberButtonsContainer'>
    { buttonNumbers == '' ? <></> :
    buttonNumbers.map((number, index) => {
        return <button key={index} className='numberButtons' onClick={handleNumberClick} value={number}>{number}</button>
    })}
    </div>
  )
}

export default NumbersButtons

