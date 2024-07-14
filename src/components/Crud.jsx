export default function get(){
    const url = 'https://toyota-fan-club-default-rtdb.europe-west1.firebasedatabase.app/'    
        async function getInfo(){
            const info = await fetch('http://localhost:3030/jsonstore/todos');
            const result = await info.json(); 
            return console.log(result); 
        }
        getInfo(); 
    
}