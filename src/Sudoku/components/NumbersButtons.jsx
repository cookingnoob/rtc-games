import useNumberButtonClick from "../hooks/useNumberButtonClick";

const NumbersButtons = () => {
    const {handleNumberClick} = useNumberButtonClick()
    const numbers = [1,2,3,4,5,6,7,8,9];

  return (
    <div className='numberButtonsContainer'>
    { numbers.map((number, index) => {
        return <button key={index} className='numberButtons' onClick={handleNumberClick} value={number}>{number}</button>
    })}
    </div>
  )
}

export default NumbersButtons

