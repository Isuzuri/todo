import React, { useState } from 'react'
import { useTasks } from '../../context/tasksContext'
import s from './style.module.css'

const AddTaskForm = () => {
  const [formData, setFormData] = useState({ title: '' })
  const {addTask} = useTasks()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      addTask(formData);
      setFormData({ title: '' });
    }
  }

  return (
      <form onSubmit={handleSubmit} className={s.addTaskForm}>
        <input type='text' required value={formData.title} onChange={(e) => setFormData({ title: e.target.value })} />
        <button type='submit'>Add</button>
      </form>
  )
}

export default AddTaskForm