import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducers } from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducers, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;
