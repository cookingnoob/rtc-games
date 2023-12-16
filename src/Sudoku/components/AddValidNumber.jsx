import React from 'react'

const AddValidNumber = ({copyOfSudoku, gridIndex, numberToAdd,sudokuBoard,cellIndex,setSudokuBoard,setNumberToAdd,setCellIndex, setText }) => {

   const handleSubmit = () => {
        if(isNumberNotSelected()){
            return
        } 
        if(isUneditableNumber()){
            return
        }
        addValueToBoard()
    }
    
    const isNumberNotSelected = () => {
        if(numberToAdd === null){
        setText('No has seleccionado un número!')
        return true 
    }
        return false
    }

    const isUneditableNumber = () => {
        if(copyOfSudoku[gridIndex][cellIndex] !== null){
            setText('No se pueden cambiar los números originales')
            return true
    }
        return false
    }
    const addValueToBoard = () => {
        const arrayToBeChanged = [...sudokuBoard]
        arrayToBeChanged[gridIndex][cellIndex] = numberToAdd
        setSudokuBoard(arrayToBeChanged)
        resetValues()
    }

    const resetValues = () => {
        setNumberToAdd(null);
        setCellIndex(null)
        setText('Selecciona una casilla')
    }



  return (
    <button onClick={() => handleSubmit()}>Colocar numero</button>
  )
}

export default AddValidNumber

    // if(numberToAdd === null){
    //     setText('No has seleccionado un número!')
    //     return
    // } else if(copyOfSudoku[grid][cellIndex] !== null){
    //     console.log(copyOfSudoku[cellIndex])
    //     setText('No se pueden cambiar los números originales')
    //     return
    // }else if(validSudoku(sudokuBoard,cellIndex, numberToAdd)){
    //     setText('No puedes poner este número porque se repite');
    //     return
    // }else{
    // const getRow = index => Math.floor(index / 9);
    // const getCol = index => index % 9;
    
    // const validRow = (sudokuBoard, index, numberToAdd) => {
    //     const row = getRow(index);
    //     for (let i = 0; i < 9; i++) {
    //         if (i !== getCol(index) && sudokuBoard[row * 9 + i] === numberToAdd) {
    //             return false;
    //         }
    //     }
    //     return true;
    // };
    
    // const validColumn = (sudokuBoard, index, numberToAdd) => {
    //     const col = getCol(index);
    //     for (let i = 0; i < 9; i++) {
    //         if (i !== getRow(index) && sudokuBoard[i * 9 + col] === numberToAdd) {
    //             return false;
    //         }
    //     }
    //     return true;
    // };
    
    // const validBox = (sudokuBoard, index, numberToAdd) => {
    //     const row = getRow(index);
    //     const col = getCol(index);
    //     const startRow = row - row % 3;
    //     const startCol = col - col % 3;
    //     for (let i = startRow; i < startRow + 3; i++) {
    //         for (let j = startCol; j < startCol + 3; j++) {
    //             const boxIndex = i * 9 + j;
    //             if (boxIndex !== index && sudokuBoard[boxIndex] === numberToAdd) {
    //                 return false;
    //             }
    //         }
    //     }
    //     return true;
    // };
    
    // // Ajusta la función validSudoku para que trabaje con el índice lineal
    // const validSudoku = (sudokuBoard, index, numberToAdd) => {
    //     return validRow(sudokuBoard, index, numberToAdd) &&
    //            validColumn(sudokuBoard, index, numberToAdd) &&
    //            validBox(sudokuBoard, index, numberToAdd);
    // };
    