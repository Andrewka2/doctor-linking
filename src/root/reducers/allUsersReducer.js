import { GET_ALL } from '../constants/index'

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
        default: {
            return {
                ...state
            }
        }
    }
} 