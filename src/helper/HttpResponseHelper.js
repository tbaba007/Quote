const jsonResponseHandler=(response)=>{
    if(!response.ok)
    return Promise.reject(response.statusText)
    else
    return response.json();
}

export{
    jsonResponseHandler,
}