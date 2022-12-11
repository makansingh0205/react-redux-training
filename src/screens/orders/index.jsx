import React from 'react'
import Cart from './Cart'
import DeliveryAddress from './DeliveryAddress'

class Orders extends React.Component {
    render(){
        return(
            <div>
            <h2>Orders Component</h2>
            <Cart />
            <DeliveryAddress />
        </div>
        )
    }
}

export default Orders;