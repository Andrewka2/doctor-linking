import { ADD_CONSULTATION_LIST, ADD_OPERATIONS_LIST, ADD_NEW_RECEPTION } from '../constants';

function setConsultationData(data) {
    let res = saveData(data)
    console.log('res');
    console.log(res);
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

function saveData(data){
    console.log(1);
    console.log(data.data.diagnosis);
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