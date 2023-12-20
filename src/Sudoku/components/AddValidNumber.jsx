import { useContext } from "react";
import { SudokuContext } from "../SudokuContext";

const AddValidNumber = () => {
  
  const {copyOfSudoku,gridIndex,numberToAdd,sudokuBoard,cellIndex,setSudokuBoard,setNumberToAdd,setCellIndex,setText,} = useContext(SudokuContext)
  
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

  function validSudoku({ sudokuBoard, numberToAdd, cellIndex, gridIndex }) {
    if (
      !validRow(sudokuBoard, gridIndex, cellIndex, numberToAdd) ||
      !validColumn(sudokuBoard, gridIndex, cellIndex, numberToAdd) ||
      !validBox(sudokuBoard, gridIndex, cellIndex, numberToAdd)
    ) {
      setText("Se repite el número");
      return false;
    }
    return true;
  }


  function validRow(board, row, col, value) {
    for (let j = 0; j < 9; j++) {
      if (j !== col) {
        if (board[row][j] === value) {
         
          return false;
        }
      }
    }
    return true;
  }


  function validColumn(board, row, col, value) {
    for (let i = 0; i < 9; i++) {
      if (i !== row) {
        if (board[i][col] === value) {
          return false;
        }
      }
    }
    return true;
  }

  function validBox(board, row, col, value) {
    const startRow = row - (row % 3),
      startCol = col - (col % 3);
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (i !== row && j !== col) {
          if (board[i][j] === value) {
            return false;
          }
        }
      }
    }

    return true;
  }

  return <button onClick={() => handleSubmit()}>Colocar numero</button>;
};

export default AddValidNumber;

