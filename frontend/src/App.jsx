import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import UpdateTask from './components/UpdateTask'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/update/:id' element={<UpdateTask />} />
      </Routes>
    </div>
  )
}

export default App
