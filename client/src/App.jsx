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

import {  Route, Routes,} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import GalleryDetails from './components/gallery/GalleryDetailsPage'
import NotFound from './components/NotFound'

import  {AuthProvider} from './contexts/authContext'
import CreatePostEdit from '../src/components/gallery/postGallery/CreatePostEdit'
import CreatePost from './components/gallery/postGallery/PostInGallery'
import Logout from './components/logout/Logout'
import DeleteForm from './components/delete/DeleteForm'
import ShopBasket from './components/shop/basket/ShopBasket'
import ItemDetails from './components/shop/shopDetails/ItemDetails'



function App() {

    return (
        <AuthProvider >
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
                    <Route path='/gallery/:id' element={<GalleryDetails />} />
                    <Route path='/gallery/:id/edit' element={<CreatePostEdit />} />
                    <Route path='/gallery/:id/delete' element={<DeleteForm />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/logout' element={<Logout/>} />
                    <Route path='/basket' element={<ShopBasket/>} />
                    <Route path='/shop/:id/:id' element={<ItemDetails/>} />



                </Routes>

                <Footer />
            </div>
        </AuthProvider>
    )

}

export default App
