import { GET_REQUESTS } from '../constants/index'

const initialState = {
    requests: [
        {
            dateTime: "",
            id: 0,
            isAssigned: false,
            personalType: "",
            petitioner: "",
            petitionerId: "",
            position: "",
            requestData: ""
        }
    ]
}

export default function requestReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REQUESTS: {
            return {
                ...state,
                requests: [
                    ...action.payload.reverse()
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