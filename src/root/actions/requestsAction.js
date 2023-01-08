import { GET_REQUESTS } from "../constants";
import $api, { API_URL } from '../../http/index';

function getRequests(data){
    return {
        type: GET_REQUESTS,
        payload: data 
    }
}

function fetchGetRequests(payload){
    return $api.get('/get-request')
}

export function thunkGetRequests(){
    return async (dispatch)=>{
        let result = await fetchGetRequests()
        dispatch(getRequests(result.data.data))
    }
}