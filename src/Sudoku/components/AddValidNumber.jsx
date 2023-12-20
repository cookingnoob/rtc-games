import { useContext } from "react";
import { SudokuContext } from "../SudokuContext";
import useValidSudokuMove from "../hooks/useValidSudokuMove";

const AddValidNumber = () => {
  
  const {copyOfSudoku,gridIndex,numberToAdd,sudokuBoard,cellIndex,setSudokuBoard,setNumberToAdd,setCellIndex,setText,} = useContext(SudokuContext)
  const {validSudoku} = useValidSudokuMove()
  const handleSubmit = () => {
    if (isNumberNotSelected()) {
      return;
    }
    if (isUneditableNumber()) {
      return;
    }
    if (!validSudoku({ sudokuBoard, numberToAdd, cellIndex, gridIndex })) {
      return;
    }
    addValueToBoard();
  };

  const isNumberNotSelected = () => {
    if (numberToAdd === null) {
      setText("No has seleccionado un número!");
      return true;
    }
    return false;
  };

  const isUneditableNumber = () => {
    if (copyOfSudoku[gridIndex][cellIndex] !== null) {
      setText("No se pueden cambiar los números originales");
      return true;
    }
    return false;
  };
  
  const addValueToBoard = () => {
    const arrayToBeChanged = [...sudokuBoard];
    arrayToBeChanged[gridIndex][cellIndex] = numberToAdd;
    setSudokuBoard(arrayToBeChanged);
    resetValues();
  };

  const resetValues = () => {
    setNumberToAdd(null);
    setCellIndex(null);
    setText("Selecciona una casilla");
  };


  return <button onClick={() => handleSubmit()}>Colocar numero</button>;
};

export default AddValidNumber;

