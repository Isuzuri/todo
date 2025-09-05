import React from 'react'
import s from './style.module.css'

const Empty = () => {
  return (
    <div className={s.emptyState}>
      <p>You have no tasks</p>
    </div>
  )
}

export default Empty