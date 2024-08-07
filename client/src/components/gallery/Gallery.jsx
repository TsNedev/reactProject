import {  Link,  } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import{get} from '../../api/apiService'
import * as request from '../../api/request' 
import * as galleryPostService from '..//..//api/galleryPostService'

export default function Gallery(){
    const [ galleryPosts,setGalleryPosts] = useState([]);

    useEffect(()=>{
        galleryPostService.getAll()
        .then(result => setGalleryPosts(result)); 
    },[])
   
    return (
        <>
        <h1>Gallery</h1>
      
      
              <section className="offers">
                
            {galleryPosts.map((post) => (
            
       
                <article className="cardTemplate" key={post._id}>
                    <Link to= {`/gallery/${post._id}`} className="grow">
                    <img className='image' src={post.ImageUrl} alt="" />
                    <h2 className="grow">{post.name}</h2>
                   
                    </Link>
                </article>
 ))}
   
                

            </section> 
            {galleryPosts.length === 0 && (
                <h3 className="no-data">No Posts yet</h3>
            )}

    

        </>
    )
}