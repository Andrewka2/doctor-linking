import { GET_ALL, DELETE_USER, UPDATE_ONE_USER } from '../constants/index'

const initialState = {
    users: [
        {
            id: 0,
            email: '',
            name: '',
            surname: '',
            position: '',
            phone: '',
            role: '',
            isTemporary: ''
        }
    ]
}

export default function allUsersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL: {
            return {
                ...state,
                users: [
                    ...action.payload
                ]
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                users: [
                    ...state.users.filter( elem => elem.id !== action.payload )
                ]
            }
        }
        case UPDATE_ONE_USER: {
            return {
                ...state,
                users: [
                    ...state.users.map((elem)=> {
                        if(elem.id === action.payload.id){
                            return action.payload
                        }else{
                            return elem
                        }
                    })
                ]
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
} 