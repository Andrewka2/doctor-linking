import { LOGIN, LOG_OUT, SIGN_UP } from "../constants";
import $api, { API_URL } from '../../http/index'
import axios from "axios";

//registration
export function registrationAction(payload){
    return {
        type: SIGN_UP,
        payload
    }
}

export function fetchRegistration(payload){
    return $api.post('/signup', payload )
}

export function thunkRegistration(payload){
    return async (dispatch)=>{
        try{
            let response = await fetchRegistration(payload)
            localStorage.setItem('token', response.data.tokens.accessToken)
            dispatch(registrationAction(response.data.userData))
        }catch(error){
            console.log(error)
            //dispatch()
        }
    }
}

//login
export function loginAction(payload){
    console.log(payload)
    return {
        type: LOGIN,
        payload
    }
}

export function fetchLogin(payload){
   return  $api.post('/login', payload )
}

export function thunkLogin(payload){
    return async (dispatch)=>{
        try{
            
            let response = await fetchLogin(payload)
            localStorage.setItem('token', response.data.tokens.accessToken)
            dispatch(loginAction(response.data.data))

           // await test()
        }catch(error){
            console.log(error)
            //dispatch()
        }
    }
}

//logout

export function logoutAction(){
    return {
        type: LOG_OUT
    }
}

export function fetchLogOut(){
    return $api.post('/logout')
}

export function thunkLogout(){
    return async (dispatch) => {
        try{
           let result = await fetchLogOut()
           localStorage.removeItem('token', result.data.accessToken)
           dispatch(logoutAction())
        }catch(error){
            console.log(error)
        }
    }
}

//checkauth

export async function checkAuth(){
    try{
        const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
        localStorage.removeItem('token', response.data.tokens.accessToken)
        return {
            user: response.data.user,
            accessToken: response.data.tokens.accessToken 
        } 
    }catch(error){
        console.log(error.response.data.message)
    }
}

//checkCaptcha

export async function verify(secret){
    try{
        const response = await axios.post(`${API_URL}/verify`, {secret: secret} )
        if(response.status === 200){
            return true
        }else{
            return false
        }        
    }catch(e){
        console.log(e)
    }
}