import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import Empty from '../Empty/Empty'
import { useTasks } from '../../context/tasksContext'
import s from './style.module.css'

const TaskList = () => {
  const { taskList } = useTasks()

  return (
    <div className={s.taskList}>
      <ul>
        {taskList.length > 0 ? taskList.map(item => (
          <TaskItem key={item.id} task={item} />
        )) : <Empty />}
      </ul>
    </div>
  )
}

export default TaskList