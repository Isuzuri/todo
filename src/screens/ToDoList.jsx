import React, { useEffect } from 'react'
import { useTasks } from '../context/tasksContext.jsx'
import AddTaskForm from '../components/AddTaskForm/AddTaskForm.jsx'
import TaskList from '../components/TaskList/TaskList.jsx'

const ToDoList = () => {
  const { refreshTasks } = useTasks()

  useEffect(() => {
    refreshTasks()
  }, [])

  return (
    <>
      <h1>To-Do List</h1>
      <AddTaskForm />
      <TaskList/>
    </>
  )
}

export default ToDoList