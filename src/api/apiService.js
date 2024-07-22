
async function get(url){
    const baceUrl= 'http://localhost:3030/jsonstore'
    const response = await fetch(`${baceUrl}${url}`);
  const result = await response.json();  
        return(result);
}

async function post(){}

async function put(){}

async function remove() {
    
}

export {
    get,
    post,
    put,
    remove
}