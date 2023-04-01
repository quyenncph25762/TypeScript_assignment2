import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './components/User'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}>
            <Route index element={<h1>Hello</h1>}></Route>
            <Route path='trang-chu' element={<h1>Trang chu</h1>}></Route>
          </Route>
          <Route path='/San-pham' element={<h1>Product</h1>}></Route>
        </Routes>
      </BrowserRouter >
    </div >
  )
}

export default App
