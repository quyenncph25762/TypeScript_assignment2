import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './components/layout/User'
import HomePage from './pages/HomePage'
import Product_detail from './pages/Product_detail'
import Admin from './components/layout/Admin'
import Signin from './pages/Signin'
import Signup from './pages/signup'
import AdminFetch from './pages/AdminFetch'
import AdminAdd from './pages/AdminAdd'
import AdminUpdate from './pages/AdminUpdate'
import Cart from './pages/Cart'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}>
            <Route index element={<HomePage />}></Route>
            <Route path='chi-tiet-san-pham' element={<Product_detail />}></Route>
            <Route path='cart' element={<Cart />}></Route>
          </Route>

          <Route path='/dang-nhap' element={<Signin />}></Route>
          <Route path='/dang-ki' element={<Signup />}></Route>

          <Route path='/admin' element={<Admin />}>
            <Route index element={<AdminFetch />}></Route>
            <Route path='/admin/them-san-pham' element={<AdminAdd />}></Route>
            <Route path='/admin/cap-nhat-san-pham' element={<AdminUpdate />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </div >
  )
}

export default App
