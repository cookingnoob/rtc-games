import { LoginProvider } from '../Login/LoginContext';
import { SudokuProvider } from './SudokuContext';
import StartWindow from './components/StartWindow';

const Sodoku = () => {
  
 
  return (
    <LoginProvider>
    <SudokuProvider>
      <StartWindow/>
  </SudokuProvider>
  </LoginProvider>
  )
}

export default Sodoku