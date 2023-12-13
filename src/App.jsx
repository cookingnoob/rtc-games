import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Hangman from './Hangman/Hangman'
import Sudoku from './Sudoku/Sudoku'
import TicTacToe from './TicTacToe/TicTacToe'

function App() {

  return (
    <>
    <header>
      <h1>App de juegos</h1>
    </header>
    <nav>
    <NavLink to="tic-tac-toe">TicTacToe</NavLink>
    <NavLink to="hangman">Hangman</NavLink>
    <NavLink to="sudoku">Sudoku</NavLink>
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
