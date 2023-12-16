import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Hangman from './Hangman/Hangman'
import Sudoku from './Sudoku/Sudoku'
import TicTacToe from './TicTacToe/TicTacToe'
import { useEffect, useState } from 'react'

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
    </nav>
    <main>
      <Outlet />
    </main>
    <footer>by Alan Coste 👾</footer>
    
    </>
  )
}

export default App
