import React, { useContext } from 'react'
import Board from './Board'
import Computer from './Computer'
import ResetButton from './ResetButton'
import { TicTacToeContext } from '../TicTacToeContext'

const PlayingWindow = () => {
  const {board,handleBoardInput, player, setComputer, setBoard, setPlayer, setText, computer, setTurn, setWinner, winner, turn } = useContext(TicTacToeContext)
  return (
    <div className='ticBoardWindow'>
    {turn != null && player != null ? <>
      <Board board={board} handleBoardInput={handleBoardInput} player={player}/> 
      <Computer setComputer={setComputer} player={player} handleBoardInput={handleBoardInput} computer={computer} board={board} winner={winner} turn={turn}/>
      <ResetButton setBoard={setBoard} setPlayer={setPlayer}  setText={setText} setComputer={setComputer} setTurn={setTurn} setWinner={setWinner} />
      </> : <></>}

    </div>
  )
}

export default PlayingWindow