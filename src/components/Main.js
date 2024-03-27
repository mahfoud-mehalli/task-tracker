import React from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import EditTaskForm from './EditTaskForm'

const Main = () => {
  return (
    <div className='main'>
        <h1>What's The Plan Today</h1>
        <TaskForm />
        <Task/>
    </div>
  )
}

export default Main