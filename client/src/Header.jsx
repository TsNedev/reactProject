import { useContext } from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import AuthContext from './contexts/authContext'
import Path from './paths/paths'


export default function Header(){
    const {
        username,
        isAuthenticated,
    }= useContext(AuthContext)
    return (

        
        <header>
        <div className="navigation">
            <div className="logo">
                <a href="#"><img src="https://cdn.pixabay.com/photo/2023/10/12/18/14/ai-generated-8311478_1280.jpg" alt="logo" /></a>
            </div>
            <nav>
                <ul>
                    <li><Link to={Path.Home}>Home</Link></li>
                    <li><Link to={"/shop"}>Shop</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    
                    
                    {isAuthenticated &&(
                    <div className='user'>
                    <li><Link to="/createPost">Create Post</Link></li>
                    <li><Link to="logout">Logout</Link></li>
                    <li><Link to="basket">basket</Link></li>
                    </div>
                    )}
                   
                    {!isAuthenticated &&(
                        <div className='guest'>
                            <li><Link to="/login">Login</Link></li>
                             <li><Link to="register">Register</Link></li>
                        
                    
                    </div>
                    )}
                      <li><Link to="/contacts">Contact us</Link></li>
                </ul>
            </nav>
        </div>
       
    </header>
    )
}