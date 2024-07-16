import {  Link, Route, Routes } from 'react-router-dom' 
import ShopItems from './ShopItems'
import { useEffect, useState } from 'react'


export default function Shop() {
   
    const [ shopTitles,setShopTitles] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const response = await fetch(' http://localhost:3030/jsonstore/shop/tiles');
            const result = await response.json(); 
            setShopTitles(result);
        })();
    },[])
console.log(shopTitles);
    return (
        <>
       
            <section className="offers">
            {shopTitles.map((shopTitle) => (
            
       
                <article className="cardTemplate" key={shopTitle._id}>
                    <Link to= {`/shop/${shopTitle._id}`} className="grow">
                        <img src={shopTitle.imageUrl} alt="" />
                        <h2 className="grow">{shopTitle.title}</h2>
                    </Link>
                </article>
 ))}
   
                

            </section>


    

        </>
    )
}