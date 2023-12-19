import { TicTacToeProvider } from "./TicTacToeContext";
import StartWindow from "./components/StartWindow";

const TicTacToe = () => {

  return (
<TicTacToeProvider>
  <StartWindow/>
</TicTacToeProvider>
  );
};


export default TicTacToe;