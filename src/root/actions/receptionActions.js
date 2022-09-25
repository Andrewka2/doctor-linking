import { ADD_RECEPTION } from '../constants';
import { addConsultationData } from './historyActions';

function setReceptionData(data) {
    return {
        type: ADD_RECEPTION,
        payload: {data}
    }
}


export function addReceptionData(data) {
    return function (dispatch) {
        dispatch(setReceptionData(data))
        dispatch(addConsultationData(data))
    }
}
