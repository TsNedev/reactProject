
import * as autService from '../api/autService'
import * as Path from '../paths/paths'
import {  useNavigate } from 'react-router-dom'
import { createContext } from "react";
import usePersistedState from '../hooks/usePersistedState';

 const AuthContext = createContext();

 export const AuthProvider = ({children}) =>{
   const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth',{});
  
    const loginSubmitHandler = async (values) => {
        const result = await autService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken',result.accessToken);
        navigate('/');
    };

     const registerSubmitHandler = async(values) =>{

       const result = await autService.register(values.username,values.password,values.email,values.image,values.firstName,values.lastName,values.age);
       setAuth(result);
       localStorage.setItem('accessToken',result.accessToken);
        navigate('/');
     }
     
   const logoutHandler = () =>{
    setAuth ({});
    localStorage.removeItem('accessToken');
    navigate('/');
   }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        id:auth._id,
        isAuthenticated: !!auth.accessToken,
    }
    return(
     <AuthContext.Provider value = {values}>
     {children}

     </AuthContext.Provider>
    )
 }

 export default AuthContext;