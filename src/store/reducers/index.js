import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import productsReducer from './products-reducer';
import ordersReducer from './orders-reducer';


export const rootReducers = combineReducers({
    usersReducer,
    productsReducer,
    ordersReducer
});