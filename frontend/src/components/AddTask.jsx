import React, { useState } from 'react'
import '../style/addtask.css'
import { useNavigate } from 'react-router-dom'

function AddTask() {

  const [task, setTask] = useState();
  const navigate = useNavigate()

  const onTaskInput = (e) => {
    const input = e.target
    const name = input.name
    const value = input.value
    setTask(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleTask = async () => {
    // e.preventDefault()


    let result = await fetch('http://localhost:3200/add-task', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    result = await result.json()
    if (result) {
      alert('Task added successfully')
      navigate('/')
    }


  }


  return (
    <div className='container'>
      <h1>Add New Task</h1>
      {JSON.stringify(task)}
      {/* <form> */}
      <label htmlFor=''>Title</label>
      <input onChange={onTaskInput} type='text' name='title' placeholder="Enter task title" />
      <label htmlFor=''>Description</label>
      <textarea onChange={onTaskInput} rows={4} name='description' placeholder='Enter New Description'></textarea>
      <button onClick={handleTask} className='submit'>Add New Task</button>
      {/* </form> */}
    </div>
  )
}

export default AddTask
