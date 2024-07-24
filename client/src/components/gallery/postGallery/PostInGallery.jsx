import *as galleryPostService from '../../../api/galleryPostService'
import'./PostInGallery.css'
import {useNavigate} from 'react-router-dom'

export default function CreatePost(){
    const navigate = useNavigate();
    const createPostSubmitHandler = async(e)=>{

        e.preventDefault();

        const postData = Object.fromEntries(new FormData (e.currentTarget));
         try{
            await galleryPostService.create(postData);
            navigate('/gallery')
         }catch{
            console.log(err);
         }
         
    }


    return (
        <div className="wrapper">
           
           <section className="registerForm  ">
           <h2>Create post</h2>
                <form action=""  onSubmit={createPostSubmitHandler} >

                    <input type="text" 
                    placeholder="name" 
                    id='name'
                    name='name'
                    /* onChange={onChange} */
                    /* value={values[RegisterFormKeys.Username]} */
                    
                    />
                     <input type="text" 
                    placeholder="Image" 
                    id='ImageUrl'
                    name='ImageUrl'
                    /* onChange={onChange} */
                    /* value={values[RegisterFormKeys.Username]} */
                    
                    />
                    <input type="text"
                    placeholder="Description" 
                    id='Description'
                    name='Description'
                    /* onChange={onChange} */
                    /* value={values[RegisterFormKeys.Username]} */ />

                    <button type="submit" className="grow">Create</button>
                    
                </form>
            </section> 
        </div>
    )
}