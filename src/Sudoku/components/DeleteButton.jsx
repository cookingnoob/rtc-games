import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'
import useDeleteNumber from '../hooks/useDeleteNumber'

const DeleteButton = () => {
 const {handleDelete} = useDeleteNumber()
  return (
    <button onClick={handleDelete}>Borrar</button>
  )
}

export default DeleteButton