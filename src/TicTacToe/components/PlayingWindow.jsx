import React, { useContext } from 'react'
import Board from './Board'
import ResetButton from './ResetButton'
import { TicTacToeContext } from '../TicTacToeContext'
import useComputerTurn from '../hooks/useComputerTurn'

const PlayingWindow = () => {
  const { player, turn } = useContext(TicTacToeContext);
  useComputerTurn()

  return (
    <div className='ticBoardWindow'>
      {turn != null && player != null ? <>
        <Board  />
        <ResetButton />
      </> : <></>}

    </div>
  )
}

export default PlayingWindow