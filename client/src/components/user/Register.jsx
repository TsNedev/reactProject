import { useContext } from 'react'
import './Register.css'
import AuthContext from '../../contexts/authContext'
import useForm from '../../hooks/useForm';


const RegisterFormKeys ={
    Email:'email',
    Password:'password',
    ConfirmPassword: 'confirm-password', 
    ImageUrl:'image',
    Username:'username',
    FirstName:'first-name',
    LastName: 'last-name',
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
                <form action="" onSubmit={onSubmit}>

                    <input type="text" 
                    placeholder="First Name"
                    id='first-name'
                    name={RegisterFormKeys.FirstName} 
                    onChange={onChange}
                    value={values[RegisterFormKeys.FirstName]}
                    />

                    <input type="text" 
                    placeholder="Last Name"
                    id='last-name'
                    name={RegisterFormKeys.LastName}
                    onChange={onChange}
                    value={values[RegisterFormKeys.LastName]}
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
                    />

                    <input type="password" 
                    placeholder="Password" 
                    id='password'
                    name={RegisterFormKeys.Password}
                    onChange={onChange}
                    value={values[RegisterFormKeys.Password]}
                    />

                    <input type="password" 
                    placeholder="Repeat Password" 
                    id='repassword'
                    name={RegisterFormKeys.ConfirmPassword}
                    onChange={onChange}
                    value={values[RegisterFormKeys.ConfirmPassword]}
                    />

                    <button type="submit" className="grow">Register</button>
                    <a className="link grow">Have Account? Login </a>
                </form>
            </section>
        </div>
    )
}