import * as request from '../api/request'

const baseUrl = 'http://localhost:3030/jsonstore/gallery' 


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