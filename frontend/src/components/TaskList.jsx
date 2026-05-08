import React, { useEffect, useState } from 'react'
import "../style/list.css"

function TaskList() {

    const [task, setTask] = useState([]);

    const loadTask = async () => {
        let response = await fetch('http://localhost:3200/task')
        response = await response.json()
        if (response.success) {
            setTask(response.result)
        }

    }

    useEffect(() => {
        loadTask()
    }, [])

    return (
        <div>
            <h1>To Do List</h1>
            <ul className='task-list'>
                <li className='list-header'>S.No.</li>
                <li className='list-header'>Title</li>
                <li className='list-header'>Description</li>
                {task.map((item, index) => (
                    <>
                        <li className='list-item'>{index + 1}</li>
                        <li className='list-item'>{item.title}</li>
                        <li className='list-item'>{item.description}</li>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default TaskList