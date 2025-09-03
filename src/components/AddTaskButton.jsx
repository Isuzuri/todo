import React, { useState } from 'react'

const AddTaskButton = ({ onAdd }) => {
  const [formData, setFormData] = useState({ title: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      onAdd(formData);
      setFormData({ title: '' }); // очистка поля после добавления
    }
  }

  return (
      <form onSubmit={handleSubmit} className='addTaskForm'>
        <input type='text' required value={formData.title} onChange={(e) => setFormData({ title: e.target.value })} />
        <button type='submit'>Add</button>
      </form>
  )
}

export default AddTaskButton