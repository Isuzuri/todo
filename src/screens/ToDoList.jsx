import React from 'react'
import AddTaskButton from '../components/addTaskButton'
import TaskList from '../components/TaskList'

const ToDoList = () => {
  return (
    <>
      <h1>To-Do List</h1>
      <AddTaskButton />
      <TaskList />
    </>
  )
}

export default ToDoList