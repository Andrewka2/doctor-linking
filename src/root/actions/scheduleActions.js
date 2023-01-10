import $api from '../../http';
import { CHANGE_STATUS, CHANGE_DATE } from '../constants';

function changeStatus(calRow, i, selectedStatus) {
    return {
        type: CHANGE_STATUS,
        payload: {calRow, i, selectedStatus}
    }
}

function changeDate(newDate) {
    return {
        type: CHANGE_DATE,
        payload: newDate
    }
}

export function updateStatus(calRow, i, selectedStatus) {
    return function (dispatch) {
        dispatch(changeStatus(calRow, i, selectedStatus))
    }
}

export function updateDate(newDate) {
    return function (dispatch) {
        dispatch(changeDate(newDate))
    }
}

export function createCalendar(data) {
    return async (dispatch) => {
        try{
            console.log(data);
            const response = await $api.get('/createCalendar')
        }catch(error){
            console.log(error)
        }
    }
}