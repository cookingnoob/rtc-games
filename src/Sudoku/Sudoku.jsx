import { SudokuContext, SudokuProvider } from './SudokuContext';
import StartWindow from './components/StartWindow';

const Sodoku = () => {
  
 
  return (
    <SudokuProvider>
      <StartWindow/>
  </SudokuProvider>
  )
}

export default Sodoku