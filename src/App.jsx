import './App.css'
import './Card.css'
import './components/shop/Shop.css'
import './components/Home.css'
import Home from './components/Home'
import Crud from './components/Crud'
import Shop from './components/shop/Shop'
import Gallery from './components/gallery/Gallery'
import Contacts from './components/user/Contacts'

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
                            <li><a href="/login">Login</a></li>
                            <li><a href="register">Register</a></li>
                            <li><a href="logout">Logout</a></li>
                        </ul>
                    </nav>
                </div>
                <Crud />
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Shop' element={<Shop />} />
                <Route path='gallery' element = {<Gallery />}/>
                <Route path='contacts' element = {<Contacts />}/>
            </Routes>

            <footer>
                <p><small>&copy; Copyright 2024, Example Corporation</small></p>
            </footer>
        </>
    )
}

export default App
