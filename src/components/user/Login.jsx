import useForm from '../../hooks/useForm'
import './Login.css'


export default function Login(){

    const {values,onChange,onSubmit}=useForm(
        {username:'',
            password:''
        }
    ); 
    return (
        <div className="wrapper">
        <section className="loginForm  ">
        <h1 className="hederLogin">Login</h1>
        <form action="" onSubmit={onSubmit}>
            <input type="text" placeholder="Username" id='username' name='username' value={values.username} onChange={onChange}/>
            <input type="password" placeholder="Password" id='password' name='password' value={values.password} onChange={onChange} />
            <button className="grow">Login</button>

            <a className="link grow " href="#">Not a Member? Register</a>
        </form>
    </section>
    </div>
    )
}