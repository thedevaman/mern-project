import React, { useEffect, useState } from 'react'
import '../style/addtask.css'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateTask() {

    const [task, setTask] = useState();
    const { id } = useParams()

    useEffect(() => {
        getTask(id)
    }, [])

    const getTask = async (id) => {
        let task = await fetch(`http://localhost:3200/task/` + id)
        task = await task.json()
        if (task.result) {
            setTask(task.result)
        }
    }



    const onTaskInput = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value
        setTask(prev => ({
            ...prev, [name]: value
        }))
    }



    return (
        <div className='container'>
            <h1>Update Task</h1>
            {/* {JSON.stringify(task)} */}
            {/* <form> */}
            <label htmlFor=''>Title</label>
            <input value={task?.title} onChange={onTaskInput} type='text' name='title' placeholder="Enter task title" />
            <label htmlFor=''>Description</label>
            <textarea value={task?.description} onChange={onTaskInput} rows={4} name='description' placeholder='Enter New Description'></textarea>
            <button className='submit'>Update Task</button>
            {/* </form> */}
        </div>
    )
}

export default UpdateTask
