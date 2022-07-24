import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'
import { useContext } from 'react'
import { AuthTokensContext } from '../authContext/provider';


const baseURL = process.env.API_BASE_URL;


const useAxios = () => {
    const {state: authState, authDispatch} = useContext(AuthTokensContext)

    const axiosInstance = axios.create({
        baseURL,
        headers:{Authorization: `Bearer ${authState.access_token}`}
    });


    axiosInstance.interceptors.request.use(async req => {
    
        const user: any = jwt_decode(authState.access_token)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    
        if(!isExpired) return req
    
        const response = await axios.post(`${baseURL}${}`, {
            refresh: authTokens.refresh
          });
    
        localStorage.setItem('authTokens', JSON.stringify(response.data))
        
        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))
        
        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })
    
    return axiosInstance
}

export default useAxios;