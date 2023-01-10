import {LOGIN, SIGN_UP, LOG_OUT, EDIT_USER} from '../constants/index'

const initialState = {
    id: 0,
    email: '',
    name: '',
    surname: '',
    position: '',
    phone: '',
    isTemporary: true,
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
                surname: action.payload.surname,
                position: action.payload.position,
                phone: action.payload.phone,
                isTemporary: action.payload.isTemporary,
                role: action.payload.role,
                isLoggedIn: true,
            }
        }
        case LOGIN: {   
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                surname: action.payload.surname,
                position: action.payload.position,
                phone: action.payload.phone,
                isTemporary: action.payload.isTemporary,
                role: action.payload.role,
                isLoggedIn: true,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                id: null,
                email: '',
                name: '',
                isLoggedIn: false
            }
        }
        case EDIT_USER: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
} 