import './Register.css'

export default function Register(){
    return(
        <div class="wrapper">
        <section className="registerForm  ">
        <form action="" method="post">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder="User Name"/>
            <input type="text" placeholder="Image"/>
            <input type="number" placeholder="Age"/>
            <input type="email" placeholder="Email address"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Repeat Password"/>

              <button type="submit" className="grow">Register</button>
              <a className="link grow">Have Account? Login </a>
        </form>
    </section>
    </div>
    )
}