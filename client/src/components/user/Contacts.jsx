import './Contacts.css'

export default function Contacts(){
    return(
        <div className='contactsPage'>
        <h1>Варна</h1>

        <div className="contactWrapper">
            <section className="card">
            <address>
        <img src="https://lh3.googleusercontent.com/p/AF1QipMqPe1tQfyWx0SPAVJ2fC2eV97M9ITtrIiHbd8N=s680-w680-h510-rw" alt="" />
        <div className='wrapperContactInfo'>
        <h3>For contact</h3>
       
        <p><i class="fa-solid fa-map-location-dot"></i>  ж.к. Младост, бул. „Република“ 97, 9000 Варна етаж 2 </p>
        <a href= "mailto: name@email.com"><i class="fa-solid fa-envelope"></i> name@email.com </a>
        <p> <i class="fa-solid fa-phone"></i> 0885579858</p>
        </div>
    </address>
   
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.0584512079192!2d27.880129190346633!3d43.23177710353297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45495b168c65b%3A0xd68fd5b4cdd4d22b!2z0JbQuNC20L4gLSDQs9GD0LzQuCDQuCDRgdC10YDQstC40Lc!5e0!3m2!1sbg!2sbg!4v1721479502902!5m2!1sbg!2sbg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
    
            </section>
        </div>



          
          </div>
    )
}

