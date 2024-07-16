
import './Login.css'


export default function Login(){
    return (
        <div className="wrapper">
        <section className="loginForm  ">
        <h1 className="hederLogin">Login</h1>
        <form action="">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button className="grow">Login</button>

            <a className="link grow " href="#">Not a Member? Register</a>
        </form>
    </section>
    </div>
    )
}