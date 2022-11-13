import {LOGIN, SIGN_UP, LOG_OUT} from '../constants/index'

const initialState = {
    id: 0,
    email: '',
    name: '',
    isLoggedIn: false
}

export default function userReducer(state = initialState, action){
    switch (action.type){
        case SIGN_UP: {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                isLoggedIn: true

            }
        }
        case LOGIN: {   
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                isLoggedIn: true
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                id: 0,
                email: '',
                name: '',
                isLoggedIn: false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
} 