import { all } from 'redux-saga/effects';
import userActionWatcher from './users-saga'

export default function* rootSaga() {
      yield all([userActionWatcher()]);
}
