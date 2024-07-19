import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styles from './ShopItems.module.css'
import{get} from '../../api/apiService'

export default function ShopItems(){
    const [shopItems,setShopItems] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
(async()=>{ 
 const result = await get(`/shop/shopDetails/${id}`);
 setShopItems(result)
})();
    },[])
console.log(shopItems);
    return(
        <>
     <section className="offers">
     <h1 className={styles.heder}>category</h1>
     { shopItems.map((shopItem) =>(
        <article id={styles.items} className="cardTemplate item" key={shopItem._id}>
            <img src={shopItem.imgUrl} alt="" />
            <div className={styles.content}>
            <h2>{shopItem.name}</h2>
            <p>{shopItem.info}</p>
                 <h3>price</h3>
            <p>{shopItem.price}$</p>
            <button className="grow ">buy</button>
        </div>
            </article>
            ))}
            </section> 
</>
    )
}