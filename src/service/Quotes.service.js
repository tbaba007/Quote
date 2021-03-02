import {getAll} from '../helper/HttpRequestHelper'


const getAllQuotes=(url)=>{
    return getAll(url)
}

export {
    getAllQuotes
}