import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import{get} from '../../../api/apiService'
import * as request from '../../../api/request'
import { useNavigate } from 'react-router-dom'
import styles from '../shopDetails/ShopDetails.module.css'
export default function ItemDetails(){
    
    const navigate = useNavigate();
   



    const[itemDetails,setItemDetails] = useState({
        name: '',
        imgUrl:'',
       price: '', 
       count: 0, 
    })
    const{id}= useParams();
  
 useEffect( ()=>{
        (async()=>{ 
            const result = await get(`/shop/Items/${id}`);
            setItemDetails(result)
            console.log(result);
           })();
    },[])
    
    const create = async(data)=>{
    
        const result = await request.post(`http://localhost:3030/jsonstore/shop/cart`, data);
    
        return result;
    }
 
    const ShopSubmitHandler = async (values) => {

        try {
            await create(values);
            navigate('/basket')
        } catch(err) {
            console.log(err);
        }

    }


    const onChange = (e) => {

        setItemDetails(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault();
        ShopSubmitHandler(itemDetails)
    }

    
    return (
        <>
        <h1>Details</h1>
        <img src={itemDetails.imgUrl} alt="" />
        <form className={styles.form} action="" onSubmit={onSubmit}>
        
       
        
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        value={itemDetails.name} 
        id="name"
        name="name"
        readOnly
        />
        <label htmlFor="price">price $</label>
         <input 
        type="text" 
        value={itemDetails.price} 
        id="price"
        name="price"
        readOnly
        />
        <label htmlFor="count">Quantity</label>
         <input 
        type="number"  
        id="count"
        name="count"
        value={itemDetails.count}
        onChange={onChange}
        />
        <button>buy</button>
        </form>
        </>
    )
}