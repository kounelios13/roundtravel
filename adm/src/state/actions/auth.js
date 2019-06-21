import axios from 'axios'
import setAuthToken from "../../utils/set-auth-token";
const url = require('../../config/config').serverUrl

export const login = (password) => dispatch =>{
    axios
        .post(url + 'auth/login', {password: password})
        .then(res=>{
            const {token} = res.data
            localStorage.setItem('token', token)
            setAuthToken(token)
            dispatch({type: "SET_AUTH", payload: true})
        })
}