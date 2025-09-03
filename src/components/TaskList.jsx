import React from 'react'
import TaskItem from './TaskItem'
import Empty from './Empty'

const TaskList = ({ taskList, completeTask, deleteTask }) => {

  return (
    <div className='taskList'>
      <ul>
        {taskList && taskList.length > 0 ? taskList.map(item => (
          <TaskItem key={item.id} task={item} completeTask={completeTask} deleteTask={deleteTask}/>
        )) : <Empty />}
      </ul>
    </div>
  )
}

export default TaskList