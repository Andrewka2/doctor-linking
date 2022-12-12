import { saveData } from '../actions/historyActions';
import { ADD_CONSULTATION_LIST, ADD_OPERATIONS_LIST, ADD_NEW_RECEPTION } from '../constants';

const initialState = {
    consultationList: {
        historyList: [
            {
                docName: 'Оленка',
                docType: 'Анастезіолог',
                diagnosis: 'Неуточнений апендицит',
                dateTime: Date.now()

            },
            {
                docName: 'Оленка',
                docType: 'Хірург',
                diagnosis: 'Гіперплазія апендикса',
                dateTime: Date.now()

            }
        ]
    },
    operationsList: {
        historyList: [
            {
                id: 1,
                petitioner: 'Оленка',
                personalType: 'Марусій',
                surgeryType: 'Ургентна планова',
                dateTime: Date.now()
            },
            {
                id: 1,
                petitioner: 'Оленка',
                personalType: 'Марусій',
                surgeryType: 'Ургентна планова',
                dateTime: Date.now()
            }
        ]
    }
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_RECEPTION:{
            return {
                ...state,
                consultationList: {
                    historyList: [action.payload, ...state.consultationList.historyList]
                }
            }
        }
        case ADD_CONSULTATION_LIST:{
            return {
                ...state,
                consultationList: {
                    historyList: action.payload
                }
            }
        }
        case ADD_OPERATIONS_LIST:{
            return {
                ...state,
                operationsList: {
                    historyList: [action.payload, ...state.operationsList.historyList]
                }
            }
        }
        default:
            return state;
    }
}
export default contentReducer;
