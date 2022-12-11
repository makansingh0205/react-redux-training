import React from 'react'
import ProductList from './ProductList'

class Products extends React.Component {
    render(){
        return(
            <div>
            <h2>Products Component</h2>
            <ProductList />
        </div>
        )
    }
}

export default Products;