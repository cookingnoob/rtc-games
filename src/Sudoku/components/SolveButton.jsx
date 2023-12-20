import useCheckAnswer from "../hooks/useCheckAnswer"

const SolveButton = () => {
  const {handleSubmitAnswers} = useCheckAnswer()
  return (
    <button onClick={handleSubmitAnswers}>SolveButton</button>
  )
}

export default SolveButton