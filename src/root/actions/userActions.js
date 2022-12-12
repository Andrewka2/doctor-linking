import { LOGIN, LOG_OUT, SIGN_UP, DOCTOR_SIGN_UP, CHANGE_PASSWORD } from "../constants";
import $api, { API_URL } from '../../http/index';
import axios from "axios";

// change password

export function changePasswordUpAction(payload){
    return {
        type: CHANGE_PASSWORD,
        payload
    }
}

async function fetchChangePassword(prevPass, newPass){
    console.log(newPass)
    return await $api.post('/users/change-password', {prevPass: prevPass, newPass: newPass})
}

export function thunhChangePassword(oldPassword, newPassword){
    return async (dispatch) => {
        try{
            let response = await fetchChangePassword(oldPassword, newPassword)
            console.log(response)
        }catch(e){
            console.log(e)
        }
    }
}

//doctor registration

export function doctorSignUpAction(payload){
    return {
        type: DOCTOR_SIGN_UP,
        payload
    }
}

function fetchDoctorSignUp(payload){
    return $api.post('/doctor-signup', payload )
}

export function thunkDoctorSignUp(payload){
    return async (dispatch) => {
        try{
            let response = await fetchDoctorSignUp(payload)
            console.log(response)
        }catch(e){
            console.log(e)
        }
    }
}

//registration

export function registrationAction(payload){
    return {
        type: SIGN_UP,
        payload
    }
}

function fetchRegistration(payload){
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
        const response = await axios.post(`${API_URL}/capcha-verify`, {secret: secret} )
        if(response.status === 200){
            return true
        }else{
            return false
        }        
    }catch(e){
        console.log(e)
    }
}