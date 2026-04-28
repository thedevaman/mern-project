import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/add' element={<AddTask />} />
      </Routes>
      {/* <h1>To Do App</h1> */}
    </div>
  )
}

export default App
