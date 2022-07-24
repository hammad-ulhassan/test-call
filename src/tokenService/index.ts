const setAuths =( data: any )=>{
    localStorage.setItem('authTokens', JSON.stringify(data));
}

const getAuths = ()=>{
    return localStorage.getItem('authTokens')
}

const removeAuths = () =>{
    return localStorage.removeItem('authTokens')
}


export default {
    setAuths,
    getAuths,
    removeAuths
}