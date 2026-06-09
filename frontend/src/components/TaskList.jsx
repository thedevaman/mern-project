import React, { Fragment, useEffect, useState } from 'react'
import "../style/list.css"
import { Link } from 'react-router-dom';

function TaskList() {

    const [task, setTask] = useState([]);
    const [selectedTask,setSelect] = useState([])

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

    const deleteTask = async (id) => {
        let item = await fetch(`http://localhost:3200/delete-task/` + id, { method: 'delete' })
        item = await item.json()
        if (item.success) {
            loadTask()
        }
        else {
            alert("Task Not Deleted")
        }
    }

    const selectAll = (event)=>{
     console.log(event.target.checked)
    }

    return (
        <div>
            <h1>To Do List</h1>
            <ul className='task-list'>
                <li className='list-header'><input type="checkbox" /></li>
                <li className='list-header'>S.No.</li>
                <li className='list-header'>Title</li>
                <li className='list-header'>Description</li>
                <li className='list-header'>Actions</li>
                {task.map((item, index) => (
                    <Fragment key={index}>
                         <li className='list-item'><input onChange={selectAll} type="checkbox" /></li>
                        <li className='list-item'>{index + 1}</li>
                        <li className='list-item'>{item.title}</li>
                        <li className='list-item'>{item.description}</li>
                        <li className='list-item'>
                            <button onClick={() => deleteTask(item._id)} className='btn-delete' >Delete</button>
                            <Link to={'/update/' + item._id} className="btn-update">Update</Link>
                        </li>
                    </Fragment>
                ))}
            </ul>
        </div>
    )
}

export default TaskList