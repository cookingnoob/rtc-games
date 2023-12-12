import React, { useEffect, useState } from 'react'

const NumbersButtons = ({grid, setText, sudokuBoard, setNumberToAdd}) => {
    const [buttonNumbers, setButtonNumbers] = useState([]);
    const numbers = [1,2,3,4,5,6,7,8,9];

    useEffect(() => {
    if(grid !== null){
        const gridNumbers = numbers.filter(number => !sudokuBoard[grid].includes(number));
        setButtonNumbers(gridNumbers)
    }
    }, [grid, sudokuBoard])

    const handleNumberClick = (e) => {
      setNumberToAdd(Number(e.target.value))
      setText('Has clic en el botón "Colocar número"')
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

