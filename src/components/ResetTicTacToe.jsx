/* eslint-disable react/prop-types */
const ResetTicTacToe = ({ setBoard, setText, setTurn, player, computer }) => {
  const resetGame = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    player.current = null;
    computer.current = null;
    setText("Escoge una ficha");
    setTurn(null);
  };
  return (
    <>
      <button onClick={resetGame}>Inicia la partida</button> <br />
    </>
  );
};

export default ResetTicTacToe;
