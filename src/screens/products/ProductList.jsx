import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem'
import { getProductsWithSaga } from '../../store/sagas/products-saga'

class ProductList extends React.Component {

    componentDidMount(){        
        // this.props.handleFetchProductsWithSaga()
    }
    render() {
        const { products } = this.props
        return (
            <div>
                <h3>Product List</h3>
                <ul>
                    {products && products.map(({ title }, index) => (
                        <li key={index}> <ProductItem productName={title} /></li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { productsList } = state.productsReducer
    return {
        products: productsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFetchProductsWithSaga: () => dispatch(getProductsWithSaga())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);