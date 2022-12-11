import { put, takeLatest } from 'redux-saga/effects';
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from '../types/user-types'

// action to call the api
export const getUsersWithSaga = () => dispatch => {
    dispatch({ type: GET_USERS_REQUEST });
};

// worker saga
function* fetchUsers() {
    try {
        const users = yield fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json());

        yield put({ type: GET_USERS_SUCCESS, payload: users });
    } catch (error) {
        yield put({ type: GET_USERS_FAILED, payload: error });
    }
}

// watcher saga
export default function* userActionWatcher() {
    yield takeLatest(GET_USERS_REQUEST, fetchUsers)
}
