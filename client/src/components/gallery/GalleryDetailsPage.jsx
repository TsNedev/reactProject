import { useEffect, useState, useContext } from 'react';
import styles from './GalleryDetails.module.css'
import { Navigate, useParams,redirect, useNavigate } from 'react-router-dom';
import * as galleryPostService from '../../api/galleryPostService'
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import { pathToUrl } from '../../utils/pathUtils';
export default function GalleryDetails(){

  const [postDetails,setPostDetails] = useState([]);
  const {id} = useParams();
  const user = useContext(AuthContext)
  useEffect(()=>{
(async()=>{ 
const result = await galleryPostService.getOne(id);

setPostDetails(result)
})();
  },[])


    const del=()=>{
       galleryPostService.del(id)
      
    } 

  
  const isOwner = user.id === postDetails._ownerId
    return(
        <>
    <section className={styles.details}>
          <div className={styles.images}>
            <img src={postDetails.ImageUrl} alt="" />
          </div>
          <div className={styles.info}>
            <h2>{postDetails.name}</h2>
            <ul>
            <li> {`Knife Type:${postDetails.KnifeType}`}</li>
<li>{ ` Overall Length:	${postDetails.OverallLength}mm`}</li>
<li>{ `Blade Length:	${postDetails.BladeLength}mm`}</li>
<li>{ `Cutting Edge:	${postDetails.CuttingEdge}mm`}</li>
<li>{ `Blade Thickness:	${postDetails.BladeThickness}mm`}</li>
<li>{ `Blade Steel:	${postDetails.BladeSteel}`}</li>
<li>{ `Blade Finish: ${postDetails.BladeFinish}`}</li>
<li>{ `Handle Material:	${postDetails.HandleMaterial}`}</li>
<li>{ `Knife Weight:	${postDetails.KnifeWeight}gr.`}</li>
<li>{ `Weight w/ Sheath:	${postDetails.WeightSheath} gr.`}</li>
<li>{ `Sheath Included:	${postDetails.SheathIncluded}`}</li>
<li>{ `Sheath Material:	${postDetails.SheathMaterial}`}</li>
<li>{ `Sheath Clip:	${postDetails.SheathClip}`}</li>
<li>{ ` Designer:	${postDetails.Designer}`}</li>
            </ul>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>{postDetails.Description}</p>
          </div>
          {isOwner &&(
<div className={styles.buttons} >
             
            <Link to= {pathToUrl("/gallery/:id/edit",{id})}  className={styles.button}>Edit</Link>
            <Link  to='/gallery' onClick={del} className={styles.button} >Delete</Link>
          </div>
          )}
          
        </section>
        </>
    )
}


