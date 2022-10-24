import { CHANGE_STATUS } from '../constants';

function changeStatus(calRow, i, selectedStatus) {
    return {
        type: CHANGE_STATUS,
        payload: {calRow, i, selectedStatus}
    }
}


export function updateStatus(calRow, i, selectedStatus) {
    return function (dispatch) {
        dispatch(changeStatus(calRow, i, selectedStatus))
    }
}
