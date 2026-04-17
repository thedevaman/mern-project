import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>List</h1>} />
        <Route path='/add' element={<h1>Add</h1>} />
      </Routes>
      {/* <h1>To Do App</h1> */}
    </div>
  )
}

export default App
