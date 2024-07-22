import Path from '../paths/paths'
import stiles from'./NotFound.module.css'
import {  Link, Route, Routes } from 'react-router-dom'

export default function NotFound(){

    return (
        <>
        <div className={stiles.wrapper}>
     <h1 className={stiles.header}>404</h1> 
     <p className={stiles.text}>Page not found</p>
     <button className={stiles.staling}><Link to={Path.Home}>Go to Home Page</Link> </button>
     </div>
     </>
    )
}