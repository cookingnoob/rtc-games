import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext';

const useValidSudokuMove = () => {
const {setText,sudokuBoard, numberToAdd, cellIndex, gridIndex } = useContext(SudokuContext);
//checks if the number the player wants to add is not being repeated on row, column or box
//if it is sets text
  function validSudoku() {
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
  return {validSudoku}
}

export default useValidSudokuMove