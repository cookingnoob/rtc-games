import useRestart from '../hooks/useRestart'

const ResetButton = () => {
  const {resetGame} = useRestart()
  return (
    <>
        <button onClick={resetGame}>Reinicia el juego </button>
    </>
  )
}

export default ResetButton