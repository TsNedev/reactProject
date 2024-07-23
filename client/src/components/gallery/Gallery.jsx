import {  Link,  } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import{get} from '../../api/apiService'


export default function Gallery(){
    const [ galleryPosts,setGalleryPosts] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const result = await get('/shop/tiles');
            setGalleryPosts(result);
        })();
    },[])
    return (
        <>
        <h1>Gallery</h1>
            <section className="offers">
                
            {galleryPosts.map((post) => (
            
       
                <article className="cardTemplate" key={post._id}>
                       
                    <Link to= {`/shop/${post._id}`} className="grow">
                    <img className='image' src={post.imageUrl} alt="" />
                    <h2 className="grow">{post.title}</h2>
                   
                    </Link>
                </article>
 ))}
   
                

            </section>


    

        </>
    )
}