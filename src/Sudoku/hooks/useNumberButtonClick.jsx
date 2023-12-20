import { useContext } from "react";
import { SudokuContext } from "../SudokuContext";

const useNumberButtonClick = () => {
    const {setText, setNumberToAdd} = useContext(SudokuContext);

    const handleNumberClick = (e) => {
        setNumberToAdd(Number(e.target.value))
        setText('Has clic en el botón "Colocar número"')
      };
      
  return {handleNumberClick}
}

export default useNumberButtonClick