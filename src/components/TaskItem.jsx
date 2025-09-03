import React from 'react'

const TaskItem = ({ task, completeTask, deleteTask }) => {
  return (
    <li className={task.isComplete ? 'completed' : ''}>
      <span>{task.title}</span>
      <div>
        <button onClick={() => completeTask(task.id, { ...task, isComplete: !task.isComplete })}>{task.isComplete ? '↩' : '✔'}</button>
        <button onClick={() => deleteTask(task.id)}>✖</button>
      </div>
    </li>
  )
}

export default TaskItem