import React, { useEffect, useState } from 'react'
import AddTaskButton from '../components/addTaskButton'
import TaskList from '../components/TaskList'
import taskApi from '../api/taskApi.js'

const ToDoList = () => {
  const [taskList, setTaskList] = useState([])

  const refreshTasks = async () => {
    const response = await taskApi.getAll()
    setTaskList(response.data)
  }

  const addTask = async (data) => {
    const response = await taskApi.create(data)
    setTaskList((prev) => [...taskList, response.data])
  }

  const completeTask = async (id, data) => {
    const response = await taskApi.edit(id, data);
    const updatedTask = response.data;
    setTaskList((prev) =>
      prev.map((task) => (task.id === id ? updatedTask : task))
    );
  }

  const deleteTask = async (id) => {
    await taskApi.delete(id)
    setTaskList((prev) =>
      prev.filter((task) => task.id !== id)
    )
  }

  useEffect(() => {
    refreshTasks()
  }, [])

  return (
    <>
      <h1>To-Do List</h1>
      <AddTaskButton onAdd={addTask} />
      <TaskList taskList={taskList} completeTask={completeTask} deleteTask={deleteTask} />
    </>
  )
}

export default ToDoList