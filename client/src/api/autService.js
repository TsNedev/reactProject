 import * as request from '../api/request'

 const baseUrl = 'http://localhost:3030/users'

export const login = async(email,password) =>{

   const result =  await request.post(`${baseUrl}/login`,{email,password});

   return result;
}

export const register =  (
   username,
   password, 
   email,
   image,
   firstName,
   lastName,
   age,) =>  request.post(`${baseUrl}/register`,{
      username,
      password,
      email,
      image,
   firstName,
   lastName,
   age,
      
      
   });
   
export const logout = () => request.get(`${baseUrl}/logout`)
