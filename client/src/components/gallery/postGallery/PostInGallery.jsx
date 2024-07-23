
import'./PostInGallery.css'

export default function CreatePost(){
    
    return (
        <div className="wrapper">
           
           <section className="registerForm  ">
           <h2>Create post</h2>
                <form action="" /* onSubmit={onSubmit} */>

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