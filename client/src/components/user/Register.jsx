import { useContext } from 'react'
import './Register.css'
import AuthContext from '../../contexts/authContext'
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';


const RegisterFormKeys ={
    Email:'email',
    Password:'password',
    ConfirmPassword:'confirmPassword',  
    ImageUrl:'image',
    Username:'username',
    FirstName:'firstName',
    LastName:'lastName',
    Age:'age',

}

export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);
    const {values , onChange, onSubmit } = useForm(registerSubmitHandler,{
        [RegisterFormKeys.Email]:'',
        [RegisterFormKeys.FirstName]:'',
        [RegisterFormKeys.LastName]:'',
        [RegisterFormKeys.Username]:'',
        [RegisterFormKeys.Password]:'',
         [RegisterFormKeys.ConfirmPassword]:'', 
        [RegisterFormKeys.Age]:'',
        [RegisterFormKeys.ImageUrl]:''
    });

    return (
        <div className="wrapper">
            <section className="registerForm  ">
            <h1 className="hederLogin">Register</h1>
                <form action="" onSubmit={onSubmit}>

                    <input type="text" 
                    placeholder="First Name"
                    id='firstName'
                    name={RegisterFormKeys.FirstName} 
                    onChange={onChange}
                    value={values[RegisterFormKeys.FirstName]}
                    required
                    
                    />

                    <input type="text" 
                    placeholder="Last Name"
                    id='lastName'
                    name={RegisterFormKeys.LastName}
                    onChange={onChange}
                    value={values[RegisterFormKeys.LastName]}
                    required
                     />

                    <input type="text" 
                    placeholder="Username" 
                    id='username'
                    name={RegisterFormKeys.Username}
                    onChange={onChange}
                    value={values[RegisterFormKeys.Username]}
                    required
                    />

                    <input type="text" 
                    placeholder="Link to picture" 
                    id='image'
                    name={RegisterFormKeys.ImageUrl}
                    onChange={onChange}
                    value={values[RegisterFormKeys.ImageUrl]}
                    />

                    <input type="number" 
                    placeholder="Age" 
                    id='age'
                    name={RegisterFormKeys.Age}
                    onChange={onChange}
                    value={values[RegisterFormKeys.Age]}
                    />

                    <input type="email" 
                    placeholder="Email address" 
                    id='email'
                    name={RegisterFormKeys.Email}
                    onChange={onChange}
                    value={values[RegisterFormKeys.Email]}
                    required
                    
                    />

                    <input type="password" 
                    placeholder="Password" 
                    id='password'
                    name={RegisterFormKeys.Password}
                    onChange={onChange}
                    value={values[RegisterFormKeys.Password]}
                    required
                    />

                    <input type="password" 
                    placeholder="Repeat Password" 
                    id='confirmPassword'
                    name={RegisterFormKeys.ConfirmPassword}
                    onChange={onChange}
                    value={values[RegisterFormKeys.ConfirmPassword]}
                    required
                    />
                    
                  
                    <button type="submit" className="grow">Register</button>
                    <Link to='/login' className="link grow">Have Account? Login </Link>
                </form>
            </section>
        </div>
    )
}