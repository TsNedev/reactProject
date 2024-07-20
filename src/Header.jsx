import {  Link, Route, Routes } from 'react-router-dom'


export default function Header(){
    return (
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
    )
}