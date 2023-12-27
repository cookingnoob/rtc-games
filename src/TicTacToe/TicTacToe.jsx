import { LoginContext, LoginProvider } from "../Login/LoginContext";
import { TicTacToeProvider } from "./TicTacToeContext";
import StartWindow from "./components/StartWindow";

const TicTacToe = () => {

  return (
    <LoginProvider>
  <TicTacToeProvider>
  <StartWindow/>
  </TicTacToeProvider>
  </LoginProvider>
  );
};


export default TicTacToe;