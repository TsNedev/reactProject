import './App.css'
import './Card.css'
import './components/shop/Shop.css'
import './components/Home.css'
import * as autService from './api/autService'

import Home from './components/Home'
import Shop from './components/shop/Shop'
import Gallery from './components/gallery/Gallery'
import Contacts from './components/user/Contacts'
import ShopItems from './components/shop/ShopItems'
import Login from './components/user/Login'
import Register from './components/user/Register'

import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import GalleryDetails from './components/gallery/GalleryDetailsPage'
import NotFound from './components/NotFound'
import { useState } from 'react'
import AuthContext from './contexts/authContext'
import Path from './paths/paths'
import CreatePost from './components/gallery/PostInGallery'
import Logout from './components/logout/Logout'


function App() {

    const navigate = useNavigate();
    const [auth, setAuth] = useState(()=>{
        localStorage.removeItem('accessToken');
        return {}; 
    });

    const loginSubmitHandler = async (values) => {
        const result = await autService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken',result.accessToken);
        navigate(Path.Home);
    };

     const registerSubmitHandler = async(values) =>{

       const result = await autService.register(values.username,values.password,values.email,values.image,values.firstName,values.lastName,values.age);
       setAuth(result);
       localStorage.setItem('accessToken',result.accessToken);
        navigate(Path.Home);
     }
     
   const logoutHandler = () =>{
    setAuth ({});
    localStorage.removeItem('accessToken');
    navigate(Path.Home);
   }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            <div className='content'>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/*' element={<NotFound />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/shop/:id' element={<ShopItems />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/createPost' element={<CreatePost />} />
                    <Route path='/gallery/details' element={<GalleryDetails />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/logout' element={<Logout/>} />



                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    )

}

export default App
