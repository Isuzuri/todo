import React from 'react'
import { useTasks } from '../../context/tasksContext'
import s from './style.module.css'

const TaskItem = ({ task }) => {
  const { completeTask, deleteTask } = useTasks()

  const toggleComplete = async () => {
    completeTask(task.id, { ...task, isComplete: !task.isComplete })
  }

  const handleDelete = async () => {
    deleteTask(task.id)
  }

  return (
    <li className={task.isComplete ? s.completed : ''}>
      <span>{task.title}</span>
      <div>
        <button onClick={toggleComplete}>{task.isComplete ? '↩' : '✔'}</button>
        <button onClick={handleDelete}>✖</button>
      </div>
    </li>
  )
}

export default TaskItem