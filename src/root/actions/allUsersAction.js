import { GET_ALL } from "../constants";
import $api, { API_URL } from '../../http/index';
import axios from "axios";

//get users

export function getAllUsersAction(payload){
    return {
        type: GET_ALL,
        payload
    }
}

export async function fetchGetAllUsers(){
    return await $api.get('/users' )
}

export function thunkGetAllUsers(){
    return async (dispatch)=>{
        try{
            let result = await fetchGetAllUsers()
            dispatch(getAllUsersAction(result.data.data))
            
        }catch(e){
            console.log(e)
        }
    }
}