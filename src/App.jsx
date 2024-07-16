import './App.css'
import './Card.css'
import './components/shop/Shop.css'
import './components/Home.css'


import Home from './components/Home'
import Shop from './components/shop/Shop'
import Gallery from './components/gallery/Gallery'
import Contacts from './components/user/Contacts'
import ShopItems from './components/shop/ShopItems'
import Login from './components/user/Login'
import Register from './components/user/Register'

import {  Link, Route, Routes } from 'react-router-dom'


function App() {
    return (
        <>
            <header>
                <div className="navigation">
                    <div className="logo">
                        <a href="#"><img src="https://cdn.pixabay.com/photo/2023/10/12/18/14/ai-generated-8311478_1280.jpg" alt="logo" /></a>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/shop"}>Shop</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contacts">Contact us</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="register">Register</Link></li>
                            <li><a href="logout">Logout</a></li>
                        </ul>
                    </nav>
                </div>
               
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='gallery' element = {<Gallery />}/>
                <Route path='contacts' element = {<Contacts/>}/>
                <Route path='/shop/:id' element={<ShopItems/>} />
            </Routes>

            <footer>
                <p><small>&copy; Copyright 2024, Example Corporation</small></p>
            </footer>
        </>
    )
}

export default App
