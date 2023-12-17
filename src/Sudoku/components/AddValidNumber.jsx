import React from 'react'

const AddValidNumber = ({copyOfSudoku, gridIndex, numberToAdd,sudokuBoard,cellIndex,setSudokuBoard,setNumberToAdd,setCellIndex, setText }) => {

  const handleSubmit = () => {
    if (isNumberNotSelected()) {
      return;
    }
    if (isUneditableNumber()) {
      return;
    }
    if (!validSudoku({sudokuBoard, numberToAdd, cellIndex, gridIndex})) {
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

  function validSudoku({sudokuBoard, numberToAdd, cellIndex, gridIndex}) {
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

  //The row function.
  function validRow(board, row, col, value) {
    // j represents on column
    console.log(`Checking if ${value} is valid on row ${row + 1}`)
    for (let j = 0; j < 9; j++) {
      // check if the current column matches the passed in column
      if (j !== col) {
        if (board[row][j] === value) {
            console.log(`${value} is equal to square on (${row},${j})`)
            return false;
        }
      }
    }

    return true;
  }

  // The column function.
  function validColumn(board, row, col, value) {
    // j represents on row
    for (let i = 0; i < 9; i++) {
      // check if the current row matches the passed in row
      if (i !== row) {
        if (board[i][col] === value) {
          return false;
        }
      }
    }

    return true;
  }

  //The sub-boxes function.
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
}

export default AddValidNumber

    //    if(validSudoku(sudokuBoard,cellIndex, numberToAdd)){
    //     setText('No puedes poner este número porque se repite');
    //     return
    // }else{
