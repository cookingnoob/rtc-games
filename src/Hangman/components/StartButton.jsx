import useStartHangman from "../hooks/useStartHangman"

const StartButton = () => {
  const {startGame} = useStartHangman()
  return (
    <>
    <button onClick={startGame}>Empieza la Partida</button>
    </>
  )
}

export default StartButton