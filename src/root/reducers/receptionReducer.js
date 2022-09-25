import { ADD_RECEPTION } from '../constants';

const initialState = {
    receptionData: []
}

const receptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECEPTION:{
            console.log('action.payload');
            console.log(action.payload);
            return {
                ...state,
                calendarRange: action.payload
            }
        }
        default:
            return state;
    }
}
export default receptionReducer;