import React from 'react'
import TaskItem from './TaskItem'
import Empty from './Empty'
import { useTasks } from '../context/tasksContext'

const TaskList = () => {
  const { taskList } = useTasks()

  return (
    <div className='taskList'>
      <ul>
        {taskList && taskList.length > 0 ? taskList.map(item => (
          <TaskItem key={item.id} task={item} />
        )) : <Empty />}
      </ul>
    </div>
  )
}

export default TaskList