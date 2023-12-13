import React from 'react'

const AddValidNumber = ({copyOfSudoku, numberToAdd,sudokuBoard,grid,cellIndex,setSudokuBoard,setNumberToAdd,setGrid,setCellIndex, setText }) => {

   const handleSubmit = () => {
    if(numberToAdd === null){
        setText('No has seleccionado un número!')
        return
    } else if(copyOfSudoku[grid][cellIndex] !== null){
        setText('No se pueden cambiar los números originales')
        return
    }else if(!validRow(sudokuBoard, grid, cellIndex, numberToAdd) || !validColumn(sudokuBoard, grid, cellIndex, numberToAdd) || !validBox(sudokuBoard, grid, cellIndex, numberToAdd)){
        setText('No puedes poner este número porque se repite');
        return
    }else{
        addValueToBoard()
        resetValues()
    }
    }

    const addValueToBoard = () => {
            const arrayToBeChanged = [...sudokuBoard]
            arrayToBeChanged[grid][cellIndex] = numberToAdd
            setSudokuBoard(arrayToBeChanged)
    }

    const resetValues = () => {
        setNumberToAdd(null);
        setGrid(null)
        setCellIndex(null)
        setText('Selecciona una casilla')
    }

    const validSudoku= (sudokuBoard) =>{
        for (let i = 0; i < 9; i++) {
             for (let j = 0; j < 9; j++) {
                 const value = sudokuBoard[i][j];
                 if (value !== null) {
                     if (!validRow(sudokuBoard, i, j, numberToAdd) || !validColumn(sudokuBoard, i, j, numberToAdd) || !validBox(sudokuBoard, i, j, numberToAdd)) {
                         return false;
                     }
                 }
             }
         }
         return true;
     };
     
     const validRow = (sudokuBoard, row, col, numberToAdd) => {
        for (let j = 0; j < 9; j++) {
            if (j !== col && sudokuBoard[row][j] === numberToAdd) {
                return false; 
            }
        }
        return true;
    };
    
    const validColumn = (sudokuBoard, row, col, numberToAdd) => {
        for (let i = 0; i < 9; i++) {
            if (i !== row && sudokuBoard[i][col] === numberToAdd) {
                return false; 
            }
        }
        return true;
    };
    
    const validBox = (sudokuBoard, row, col, numberToAdd) => {
        const startRow = row - (row % 3), startCol = col - (col % 3);
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (sudokuBoard[i][j] === numberToAdd) {
                    return false;
                }
            }
        }
        return true;
    };
  return (
    <button onClick={handleSubmit}>Colocar numero</button>
  )
}

export default AddValidNumber
