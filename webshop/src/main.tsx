import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, redirect, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Layout from './pages/layout'
import Products from './pages/products'
import Cart from './components/Cart'
import { useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Fooldal/>}>
            </Route>
            <Route path='products' element={<Products />} />
            <Route path='cart' element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)


function Fooldal() {
  redirect("/products")
  return null;
}
