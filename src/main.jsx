import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TicTacToe from './TicTacToe/TicTacToe.jsx'
import Hangman from './Hangman/Hangman.jsx'
import Sudoku from './Sudoku/Sudoku.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="tic-tac-toe" element={<TicTacToe />} />
          <Route path='hangman' element={<Hangman />} />
          <Route path="sudoku" element={<Sudoku />} />
          <Route
            path="*"
            element={
              <main>
                <p>404 - No existe la ruta!</p>
      </main> }
          ></Route>
        </Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
