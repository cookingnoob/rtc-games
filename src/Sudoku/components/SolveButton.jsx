import useCheckAnswer from "../hooks/useCheckAnswer"

const SolveButton = () => {
  const {handleSubmitAnswers} = useCheckAnswer()
  return (
    <button onClick={handleSubmitAnswers}>Comprueba tus respuestas</button>
  )
}

export default SolveButton