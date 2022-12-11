const initialState = {
    productsList:  [{
        id: 1,
        title: 'Product1'
    },
    {
        id: 2,
        title: 'Product2'
    },
    {
        id: 3,
        title: 'Product3'
    }]
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
    default :
        return state
    }
} 

export default productReducer;