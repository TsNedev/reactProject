import {  Link,  } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import *as basketService from '../../../api/basketService'


export default function ShopBasket(){

    const [ basketItems,setBasketItems] = useState([]);

    useEffect(()=>{
        basketService.getAll()
        .then(result => setBasketItems(result)); 
    },[])

    return(
        <>
        <h1>Basket</h1>
        <ul>
            <li></li>
        {basketItems.map((item) => (
           
           <li key={item._id}>
            <ul className='rol'>
                <li> {item.name}</li>
                <li>{item.price}</li>
                <li>{item.count}</li>
            </ul>
           </li>
       

       
))}
</ul>
<button>Proceed</button>
</>
    )
}