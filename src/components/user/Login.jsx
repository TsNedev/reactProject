import useForm from '../../hooks/useForm'
import './Login.css'


const LoginFormKeys = {
    Username: 'username',
    Password : 'password'
}

export default function Login({loginSubmitHandler}){

    const {values,onChange,onSubmit}=useForm(loginSubmitHandler,
        {[LoginFormKeys.Username]: '',
            [LoginFormKeys.Password] : ''
        }
    ); 
    return (
        <div className="wrapper">
        <section className="loginForm  ">
        <h1 className="hederLogin">Login</h1>
        <form action="" onSubmit={onSubmit}>
            <input type="text" 
            placeholder="Username" 
            id='username' 
            name={LoginFormKeys.Username} 
            value={values[LoginFormKeys.Username]} 
            onChange={onChange}/>

            <input type="password" 
            placeholder="Password" 
            id='password' 
            name={LoginFormKeys.Password} 
            value={values[LoginFormKeys.Password]} 
            onChange={onChange} />

            <button className="grow">Login</button>

            <a className="link grow " href="#">Not a Member? Register</a>
        </form>
    </section>
    </div>
    )
}