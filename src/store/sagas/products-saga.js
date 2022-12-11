import { put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED } from '../types/products-types'

export const getProductsWithSaga = () => dispatch => {
    dispatch({ type: GET_PRODUCTS_REQUEST });
};

function* fetchProducts() {
    try {
        const products = yield fetch('https://fakestoreapi.com/products')
            .then(response => response.json());

        yield put({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
        yield put({ type: GET_PRODUCTS_FAILED, payload: error });
    }
}


export default function* productActionWatcher() {
    yield takeLatest(GET_PRODUCTS_REQUEST, fetchProducts)
}
// generator function 

// function* calc() {

//     let x = yield 'Please enter the value of x' 
//     let y = yield 'Please enter the value of y' 
//     let z = yield 'Please enter the value of z'
   
//     return  x+y+z
   
//    }
   
//    var initiate = calc();
   
//    console.log(initiate.next())
//    console.log(initiate.next(5))
//    console.log(initiate.next(8))
//    console.log(initiate.next(7))
