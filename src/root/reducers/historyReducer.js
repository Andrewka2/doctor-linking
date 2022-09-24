import { ADD_CONSULTATION_LIST, ADD_OPERATIONS_LIST } from '../constants';

const initialState = {
    consultationList: {
        historyList: []
    },
    operationsList: {
        historyList: []
    }
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONSULTATION_LIST:{
            console.log('bla bla 3');
            console.log(action.payload);
            return {
                ...state,
                consultationList: {
                    historyList: action.payload
                }
            }
        }
        case ADD_OPERATIONS_LIST:{
            console.log('bla bla 4');
            console.log(action.payload);
            return {
                ...state,
                operationsList: {
                    historyList: action.payload
                }
            }
        }
        default:
            return state;
    }
}
export default contentReducer;
