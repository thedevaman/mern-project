import React, { useEffect, useState } from 'react'

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
        <div className='container'>
            <h1>List of Tasks</h1>
            <p>Todo List</p>
            {task.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}

        </div>
    )
}

export default TaskList