import { useContext } from "react";
import { SudokuContext } from "../SudokuContext";

const NumbersButtons = ({}) => {
  const {setText, setNumberToAdd} = useContext(SudokuContext)
    const numbers = [1,2,3,4,5,6,7,8,9];

    const handleNumberClick = (e) => {
      setNumberToAdd(Number(e.target.value))
      setText('Has clic en el botón "Colocar número"')
    }

  return (
    <div className='numberButtonsContainer'>
    { numbers.map((number, index) => {
        return <button key={index} className='numberButtons' onClick={handleNumberClick} value={number}>{number}</button>
    })}
    </div>
  )
}

export default NumbersButtons

