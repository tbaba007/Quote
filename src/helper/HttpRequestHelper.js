import {jsonResponseHandler} from './HttpResponseHelper'
const getAll=(url)=>{
    return fetch(url)
    .then(jsonResponseHandler)
} 
export{
    getAll
}