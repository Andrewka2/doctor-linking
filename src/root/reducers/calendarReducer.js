import { ADD_DEFAULT_CALENDAR } from '../constants';

const initialState = {
    calendarRange: [],
    rawItems: []
}

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DEFAULT_CALENDAR:{
            return {
                ...state,
                calendarRange: action.payload.calendarRange,
                rawItems: action.payload.rawItems
            }
        }
        default:
            return state;
    }
}
export default calendarReducer;
