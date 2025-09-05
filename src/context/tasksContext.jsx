import { createContext, useContext, useState } from "react";
import taskApi from '../api/taskApi.js'

const TasksContext = createContext()

export const TasksProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([])

  const refreshTasks = async () => {
    const response = await taskApi.getAll()
    setTaskList(response.data)
  }

  const addTask = async (data) => {
    const response = await taskApi.create(data)
    setTaskList((prev) => [...prev, response.data])
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

  return (
    <TasksContext.Provider value={{ taskList, refreshTasks, addTask, completeTask, deleteTask }}>{children}</TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)