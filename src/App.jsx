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
import Footer from './Footer'
import Header from './Header'


function App() {
    return (
        <>
           <Header/>
           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='gallery' element = {<Gallery />}/>
                <Route path='contacts' element = {<Contacts/>}/>
                <Route path='/shop/:id' element={<ShopItems/>} />
            </Routes>
            
            <Footer/>
        </>
    )
}

export default App
