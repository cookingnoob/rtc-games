import { createContext, useState } from "react";

export const SudokuContext = createContext();
export const SudokuProvider = ({children}) => {
    //de toda la app
    const [sudokuBoard, setSudokuBoard] = useState(null);
    const [copyOfSudoku, setCopyOfSudoku] = useState(null)
    const [text, setText] = useState('Empieza la partida')
    const [solution, setSolution] = useState(null)
  //de Playing window
    const [gridIndex, setGridIndex] = useState(null);
    const [cellIndex, setCellIndex] = useState(null)
    const [numberToAdd, setNumberToAdd] = useState(null)

    const contextValue = {
        sudokuBoard,
        setSudokuBoard, 
        copyOfSudoku, 
        setCopyOfSudoku,
        text, 
        setText,
        solution, 
        setSolution,
        gridIndex, 
        setGridIndex,
        cellIndex, 
        setCellIndex,
        numberToAdd, 
        setNumberToAdd,
    }
    return (
        <SudokuContext.Provider value={contextValue}>
            {children}
        </SudokuContext.Provider>
    )
}

