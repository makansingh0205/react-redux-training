import { CHANGE_USER_NAME, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from '../types/user-types'

export const handleNameChange = (userName) => {
    return {
        type: CHANGE_USER_NAME,
        userName
    }
}
// for setting the loading status on request
export const getUsersRequest = () => {
    return {
        type: GET_USERS_REQUEST
    }
}

// to set get the user list on success and pass the data to store  
export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

//  to set the error message if api failed
export const getUsersFailed = (error) => {
    return {
        type: GET_USERS_FAILED,
        payload: error
    }
}

// action creator for fetch user data from api 
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(getUsersRequest())
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch(getUsersSuccess(data)))
            .catch(error => dispatch(getUsersFailed(error)))
    }
}
