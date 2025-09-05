import React, { useEffect, useState } from 'react'
import AddTaskButton from '../components/addTaskButton'
import TaskList from '../components/TaskList'
import taskApi from '../api/taskApi.js'
import { useTasks } from '../context/tasksContext.jsx'

const ToDoList = () => {
  const { refreshTasks } = useTasks()

  useEffect(() => {
    refreshTasks()
  }, [])

  return (
    <>
      <h1>To-Do List</h1>
      <AddTaskButton />
      <TaskList/>
    </>
  )
}

export default ToDoList