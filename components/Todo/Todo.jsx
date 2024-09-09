import React from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import styles from './Todo.css'
import { red } from "@mui/material/colors"

export const Todo = ({ content, id, created, complete, dueDate, todoIsComplete }) => {

  return (
    <div id={id} className="todo">
      <p>{content}</p>
      <p>{dueDate}</p>
      {!complete && <CheckCircleIcon onClick={() => { todoIsComplete(id) }} className='checkmark' color="success"></CheckCircleIcon>}
      {complete && <DeleteIcon className='delete-icon' color="secondary"></DeleteIcon>}
      {complete && <RestoreIcon className='restore-icon' color="primary"></RestoreIcon>}
    </div>
  )
}