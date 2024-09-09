import { React, useEffect, useState } from "react"
import { Todo } from "../Todo/Todo"
import { fetchAllTodos, fetchPutUpdateStatus } from "@/app/api/routes"
import styles from './App.css'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete'
import { TransitionGroup } from 'react-transition-group'
import WarningModal from "../WarningModal/WarningModal"

const App = () => {
  const [todos, setTodos] = useState([])
  const [open, setOpen] = useState(false)

  const handleModal = () => setOpen(open ? false : true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    getAllTodos()
  }, [])

  const getAllTodos = async () => {
    let result = await fetchAllTodos()
    setTodos(result)
  }

  const todoIsComplete = async (id) => {
    const response = await fetchPutUpdateStatus(id, true)
    console.log(response)
    await getAllTodos()
    return response
  }

  if (todos.length) {
    const renderedTodos = todos.filter(todo => !todo.complete).map(todo => <Todo
      key={todo.id}
      id={todo.id}
      content={todo.content}
      created={todo.created}
      complete={todo.complete}
      dueDate={todo.dueDate}
      todoIsComplete={todoIsComplete}
    ></Todo>
    )

    const renderedDones = todos.filter(todo => !!todo.complete).map(todo => <Todo
      key={todo.id}
      id={todo.id}
      content={todo.content}
      created={todo.created}
      complete={todo.complete}
      dueDate={todo.dueDate}
      handleOpen={handleModal}
    ></Todo>
    )

    return (
      <div className="main-container">
        <div className="todo-container">
          <h1>To Do</h1>
          <div className="todo-list">
            {renderedTodos}
          </div>
        </div>
        <div className="done-container">
          <h1>Done</h1>
          <div className="dones-list">
            {renderedDones}
          </div>
        </div>
        <WarningModal handleOpen={handleModal} handleClose={handleClose}></WarningModal>
      </div>
    )
  }
}

export default App