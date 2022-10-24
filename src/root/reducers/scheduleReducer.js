import { CHANGE_STATUS } from '../constants';
import { calendarSampleData } from '../../constants/calendarSample';

const initialState = {
    calendarRange: [],
    rawData: calendarSampleData
}

const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:{
            return {
                ...state,
                rawData: state.rawData.map(
                    (item, i) => (i == action.payload.calRow) ? {...item, [action.payload.i]: action.payload.selectedStatus} : item)
            }
        }
        default:
            return state;
    }
}
export default scheduleReducer;