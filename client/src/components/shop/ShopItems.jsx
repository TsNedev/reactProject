import { useContext, useEffect, useState } from "react"
import {  useParams,Link  } from "react-router-dom";
import styles from './ShopItems.module.css'
import{get} from '../../api/apiService'
import AuthContext from "../../contexts/authContext";


export default function ShopItems(){

    const [shopItems,setShopItems] = useState([]);
    const {id: productId} = useParams();

    useEffect(()=>{
(async()=>{ 
 const result = await get(`/shop/shopDetails/${productId}`);
 setShopItems(result)
})();
    },[])

    const {isAuthenticated,}= useContext (AuthContext)

  
    return(
        <>
     <section className="offers">
     <h1 className={styles.heder}>category</h1>
     { shopItems.map((shopItem) =>(
        <article id={styles.items} className="cardTemplate item" key={shopItem._id}>
            <img className="image" src={shopItem.imgUrl} alt="" />
            <div className={styles.content}>
            <h2>{shopItem.name}</h2>
            <p>{shopItem.info}</p>
                 <h3>price</h3>
            <p>{shopItem.price}$</p>
            {isAuthenticated &&(
            <button className="grow "><Link to={`/shop/${productId}/${shopItem._id}`}>buy</Link></button>
            )}
        </div>
            </article>
            ))}
            </section> 
</>
    )
}