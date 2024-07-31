import *as galleryPostService from '../../../api/galleryPostService'
import'./PostInGallery.css'
import {useNavigate, useParams} from 'react-router-dom'
import  useForm  from '../../../hooks/useForm'
import { useEffect, useState } from 'react';

export default function CreatePostEdit(){
    const navigate = useNavigate();
    const {id} = useParams()
    const [ data, setData] = useState({
        name:'',
        Image:'',
        Description: '',
    })

    useEffect(()=>{
        galleryPostService.getOne(id)
        .then(result =>{
            setData(result);
        })
    },[id])

    const editPostSubmitHandler = async(values)=>{

         try{
            await galleryPostService.edit(id,values);
            navigate('/gallery')
         }catch{
            console.log(err);
         }
         
    }
   
     const {values, onChange,onSubmit}= useForm(editPostSubmitHandler,data);
     
    

    

    return (
        <div className="wrapper">
           
           <section className="registerForm  ">
           <h2>Create post</h2>
                <form action=""  onSubmit={onSubmit} >

                    <input type="text" 
                    placeholder="name" 
                    id='name'
                    name='name'
                     onChange={onChange} 
                     value={values.name} 
                    
                    />
                     <input type="text" 
                    placeholder="Image" 
                    id='ImageUrl'
                    name='ImageUrl'
                     onChange={onChange} 
                     value={values.ImageUrl} 
                    
                    />
                    <input type="textarea"
                    placeholder="Description" 
                    id='Description'
                    name='Description'
                     onChange={onChange} 
                    value={values.Description}/>

                    <button type="submit" className="grow">Save</button>
                    
                </form>
            </section> 
        </div>
    )
}