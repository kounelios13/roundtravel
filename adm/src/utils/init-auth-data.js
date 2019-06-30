import jwt_decode from 'jwt-decode'
import setAuthToken from "./set-auth-token";
import store from '../state/store'

export const initAuthData = () =>{
    if(localStorage.token){
        const decoded = jwt_decode(localStorage.token)

        if(tokenHasNotExpired(decoded)){
            setAuthToken(localStorage.token)
            store.dispatch({type: "SET_AUTH", payload: true})
        }
    }
}

const tokenHasNotExpired = (token) =>{
    if(token.exp < Date.now() / 1000){
        localStorage.removeItem('token')
        return false;
    }
    return true;
}