import useRestart from "../hooks/useRestart"

const RestartSudoku = () => {
  const {handleRestart} = useRestart()

  return (
    <>
    <button onClick={handleRestart}>Reinicia el Sudoku</button>
    </>
  )
}

export default RestartSudoku