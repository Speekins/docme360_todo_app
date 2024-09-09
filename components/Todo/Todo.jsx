import React from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import RestoreIcon from '@mui/icons-material/Restore'
import styles from './Todo.css'
import { red } from "@mui/material/colors"

export const Todo = ({ content, id, created, complete, dueDate, todoIsComplete, handleOpen }) => {

  const today = new Date().toISOString().slice(0, 10)
  const overdue = dueDate < today

  return (
    <div id={id} className="todo">
      <div className="todo-content">
        <p>{content}</p>
        {!complete && <CheckCircleIcon onClick={() => { todoIsComplete(id) }} className='checkmark' color="success" fontSize="large"></CheckCircleIcon>}
        {complete && <DeleteIcon className='delete-icon' onClick={() => { handleOpen() }} color="secondary"></DeleteIcon>}
        {complete && <RestoreIcon className='restore-icon' color="primary"></RestoreIcon>}
      </div>
      <div className="dates">
        <p>Created: {created}</p>
        <p className={overdue ? "warning" : undefined}>Due Date: {dueDate}</p>
      </div>
    </div>
  )
}