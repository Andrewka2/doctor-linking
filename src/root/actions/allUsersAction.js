import { GET_ALL, UPDATE_ONE_USER } from "../constants";
import $api from '../../http/index';

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

//update user 
export function updateOneUserAction(payload){
    return {
        type: UPDATE_ONE_USER,
        payload
    }
}