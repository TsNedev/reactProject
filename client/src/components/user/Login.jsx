import { useContext } from 'react';
import useForm from '../../hooks/useForm'
import AuthContext from '../../contexts/authContext';
import './Login.css'

const LoginFormKeys = {
    Email: 'email',
    Password : 'password'
}

export default function Login(){

    const {loginSubmitHandler} = useContext(AuthContext)
    const {values,onChange,onSubmit}=useForm(loginSubmitHandler,
        {[LoginFormKeys.Email]: '',
            [LoginFormKeys.Password] : ''
        }
    ); 
    return (
        <div className="wrapper">
        <section className="loginForm  ">
        <h1 className="hederLogin">Login</h1>
        <form action="" onSubmit={onSubmit}>
            <input type="email" 
            placeholder="Email" 
            id='Email' 
            name={LoginFormKeys.Email} 
            value={values[LoginFormKeys.Email]} 
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