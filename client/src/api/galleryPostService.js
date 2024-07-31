import { Navigate, redirect } from 'react-router-dom';
import * as request from '../api/request'

const baseUrl = 'http://localhost:3030/data/gallery' 


export const create = async(data)=>{
    
    const result = await request.post(baseUrl, data);

    return result;
}

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`, );

    return result;
}

export const edit = async(id,data)=>{
    
    const result = await request.put(`${baseUrl}/${id}`, data);

    return result;
}

export  const del =async(id)=>{
     const result = await request.remove(`${baseUrl}/${id}`); 
     Navigate('gallery')
}