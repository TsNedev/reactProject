import styles from './GalleryDetails.module.css'

export default function GalleryDetails(){
    return(
        <>
    <section className={styles.details}>

          <div className={styles.images}>
            <img src="https://www.topsknives.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/s/t/steel_eagle_105e-15_1.jpg" alt="" />
          </div>
          <div className={styles.info}>
            <h2>STEEL EAGLE 105E</h2>
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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusamus atque, iusto quia necessitatibus corrupti, ab itaque repellat quasi maxime, id fugiat. Esse exercitationem porro sapiente natus laudantium ducimus reprehenderit.</p>
          </div>
          <div className={styles.buttons} >
            <button className={styles.button}>Edit</button>
            <button className={styles.button}>Delete</button>
          </div>
        </section>
        </>
    )
}