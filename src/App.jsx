import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <header>
      <h1>App de juegos</h1>
    </header>
    <nav>
    <NavLink to="tic-tac-toe" className='navLink'>TicTacToe</NavLink>
    <NavLink to="hangman" className='navLink'>Hangman</NavLink>
    <NavLink to="sudoku" className='navLink'>Sudoku</NavLink>
    <NavLink to="login" className='navLink'>Login</NavLink>
    </nav>
    <main>
      <Outlet />
    </main>
    <footer>by Alan Coste 👾</footer>
    
    </>
  )
}

export default App
