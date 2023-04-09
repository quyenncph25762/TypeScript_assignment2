import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './components/layout/User'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import Admin from './components/layout/Admin'
import Signin from './pages/Signin'
import Signup from './pages/signup'
import AdminFetch from './pages/AdminFetch'
import AdminAdd from './pages/AdminAdd'
import AdminUpdate from './pages/AdminUpdate'
import Cart from './pages/Cart'
import CategoryFetch from './pages/CategoryFetch'
import CategoryAdd from './pages/CategoryAdd'
import CategoryUpdate from './pages/CategoryUpdate'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<User />}>
        <Route index element={<HomePage />}></Route>
        <Route path='product/:id' element={<ProductDetail />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Route>

      <Route path='/dang-nhap' element={<Signin />}></Route>
      <Route path='/dang-ki' element={<Signup />}></Route>

      <Route path='/admin' element={<Admin />}>
        <Route index element={<AdminFetch />}></Route>
        <Route path='them-san-pham' element={<AdminAdd />}></Route>
        <Route path='products/:id' element={<AdminUpdate />}></Route>
        <Route path='category' element={<CategoryFetch />}></Route>
        <Route path='category/them-the-loai' element={<CategoryAdd />}></Route>
        <Route path='category/:id' element={<CategoryUpdate />}></Route>
      </Route>

    </Routes>
  </BrowserRouter >
}

export default App
