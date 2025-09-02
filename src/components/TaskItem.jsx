import React from 'react'

const TaskItem = ({ title, isCompleted }) => {
  return (
    <li className={isCompleted ? 'completed' : ''}>
      <span>{title}</span>
      <button>{isCompleted ? '✖' : '✔'}</button>
    </li>
  )
}

export default TaskItem