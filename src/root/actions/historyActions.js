import { ADD_CONSULTATION_LIST, ADD_OPERATIONS_LIST } from '../constants';

function setConsultationData(data) {
    console.log('bla bla');
    console.log(data);
    return {
        type: ADD_CONSULTATION_LIST,
        payload: data
    }
}

function setOperationData(data) {
    console.log('bla bla 2');
    console.log(data);
    return {
        type: ADD_OPERATIONS_LIST,
        payload: data
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