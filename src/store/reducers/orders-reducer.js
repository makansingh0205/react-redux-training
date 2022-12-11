import { GET_ORDER_LIST } from '../types/orders-types'

const initialState = {
    ordersList: ''
}

const orderReducer = (state = initialState, action) => {
    switch(action.type){
     case GET_ORDER_LIST: 
        return {
            ...state,
            ordersList: action.payload
        }
    default :
        return state
    }
} 

export default orderReducer;