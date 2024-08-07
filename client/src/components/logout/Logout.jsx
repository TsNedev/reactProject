import { useContext, useEffect } from "react"

import * as autService from '../../api/autService'
import { useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/authContext";

export default function Logout(){
    
    const navigate = useNavigate();
    const{logoutHandler} = useContext(AuthContext);
   useEffect(()=>{
       autService.logout()
       .then(()=>logoutHandler())
       .catch(()=>navigate("/"));
       
   },[])    
    
    return null
}