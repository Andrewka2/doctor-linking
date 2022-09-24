import { ADD_DEFAULT_CALENDAR } from '../constants';

function setCalendarData(calendarRange, rawItems) {
    return {
        type: ADD_DEFAULT_CALENDAR,
        payload: {calendarRange, rawItems}
    }
}


export function addCalendarData(calendarRange, rawItems) {
    return function (dispatch) {
        dispatch(setCalendarData(calendarRange, rawItems))
    }
}
