import { ADD_CONSULTATION_LIST, ADD_OPERATIONS_LIST, ADD_NEW_RECEPTION } from '../constants';
import $api, { API_URL } from '../../http/index';

function setConsultationData(data) {
    let res = saveData(data)
    return {
        type: ADD_NEW_RECEPTION,
        payload: res
    }
}

function addConsultationItem(data) {
    return {
        type: ADD_CONSULTATION_LIST,
        payload: data
    }
}

function setOperationData(data) {
    return {
        type: ADD_OPERATIONS_LIST,
        payload: data
    }
}

async function fetchOperationData(data){
    await $api.post('/notifcation', data)
}

export function thunkOperationData(data){
    return async (dispatch) => {
        let result = await fetchOperationData(data)
        const reducerData = {
            id: data.petitionerId,
            petitioner: data.petitioner,
            personalType: data.personalType,
            surgeryType: data.requestData.surgeryType,
            dateTime: data.dateTime
        } 
        dispatch(setOperationData(reducerData))
    }
}

function saveData(data){
    return {
        docName: data.doctor.value,
        docType: data.doctor.label,
        diagnosis: data.data.diagnosis,
        dateTime: Date.now()
    }
}

export function addNewHistoryItem(data){
    return function (dispatch) {
        dispatch(addConsultationItem(data))
    }
}

export function addConsultationData(data) {
    return function (dispatch) {
        dispatch(setConsultationData(data))
    }
}

export function addOperationsData(data) {
    return function (dispatch) {
        dispatch(setOperationData(data))
    }
}