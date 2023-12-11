import React, { useEffect, useState } from 'react'

const NumbersButtons = ({grid, sudokuBoard}) => {
const [buttonNumbers, setButtonNumbers] = useState([]);
const numbers = [1,2,3,4,5,6,7,8,9];

useEffect(() => {
    if(grid != ''){
        const gridNumbers = numbers.filter(number => !sudokuBoard[grid].includes(number));
        setButtonNumbers(gridNumbers)
    }
}, [grid, sudokuBoard])



  return (
    <div className='numberButtonsContainer'>
    { buttonNumbers == '' ? <></> :
    buttonNumbers.map((number, index) => {
        return <button key={index} className='numberButtons'>{number}</button>
    })}
    </div>
  )
}

export default NumbersButtons