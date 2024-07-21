import stiles from'./NotFound.module.css'


export default function NotFound(){

    return (
        <>
        <div className={stiles.wrapper}>
     <h1 className={stiles.header}>404</h1> 
     <p className={stiles.text}>Page not found</p>

     <button className={stiles.staling}>Go to Home Page</button>
     </div>
     </>
    )
}