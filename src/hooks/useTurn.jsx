
// Turno del jugador actual
// retorna si alguien gano o no

const useTurn = () => {
    const [turn, setTurn] = useState(null);
    const [winner, setWinner] = useState(null);
  
  return (
    {turn, winner}
  )
}

export default useTurn