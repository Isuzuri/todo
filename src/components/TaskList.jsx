import React from 'react'
import TaskItem from './TaskItem'
import Empty from './Empty'

const TaskList = ({ taskList }) => {

  return (
    <div className='taskList'>
      <ul>
        {taskList && taskList.length > 0 ? taskList.map(item => (
          <TaskItem key={item.id} />
        )) : <Empty />}
      </ul>
    </div>
  )
}

export default TaskList