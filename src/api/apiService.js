
async function get(url){
    const baceUrl= 'http://localhost:3030/jsonstore'
    const response = await fetch(`${baceUrl}${url}`);
  const result = await response.json();  
        return(result);
}



export {
    get
}