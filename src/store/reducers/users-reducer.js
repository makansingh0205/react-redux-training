import { CHANGE_USER_NAME, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from '../types/user-types'

const initialState = {
    userName: '',
    loading: false,
    usersList: [],
    errorMessage: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return {
                ...state,
                userName: action.userName
            }
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                loading: false,
                usersList: action.payload,
                errorMessage: ''
            }

        case GET_USERS_FAILED:
            return {
                loading: false,
                usersList: [],
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default userReducer;