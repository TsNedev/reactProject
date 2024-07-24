import { useEffect, useState } from 'react';
import styles from './GalleryDetails.module.css'
import { useParams } from 'react-router-dom';
import * as galleryPostService from '../../api/galleryPostService'

export default function GalleryDetails(){

  const [postDetails,setPostDetails] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
(async()=>{ 
const result = await galleryPostService.getOne(id);
setPostDetails(result)
})();
  },[])
console.log(postDetails);

    return(
        <>
    <section className={styles.details}>
          <div className={styles.images}>
            <img src={postDetails.ImageUrl} alt="" />
          </div>
          <div className={styles.info}>
            <h2>{postDetails.name}</h2>
            <ul>
            <li> {`Knife Type:	Fixed Blade`}</li>
<li>{ ` Overall Length:	10.50"`}</li>
<li>{ `Blade Length:	5.13"`}</li>
<li>{ `Cutting Edge:	5.00"`}</li>
<li>{ `Blade Thickness:	0.250"`}</li>
<li>{ `Blade Steel:	1095 RC 56-58`}</li>
<li>{ `Blade Finish:	Black Traction Coating`}</li>
<li>{ `Handle Material:	Black Linen Micarta`}</li>
<li>{ `Knife Weight:	15.3 oz`}</li>
<li>{ `Weight w/ Sheath:	18.6oz`}</li>
<li>{ `Sheath Included:	Yes`}</li>
<li>{ `Sheath Material:	Black Kydex`}</li>
<li>{ `Sheath Clip:	Rotating Spring Steel`}</li>
<li>{ ` Designer:	TOPS Team`}</li>
            </ul>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>{postDetails.Description}</p>
          </div>
          <div className={styles.buttons} >
            <button className={styles.button}>Edit</button>
            <button className={styles.button}>Delete</button>
          </div>
        </section>
        </>
    )
}