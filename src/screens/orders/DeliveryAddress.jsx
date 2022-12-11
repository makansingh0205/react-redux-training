import React from 'react';
import { connect } from 'react-redux';

class DeliveryAddress extends React.Component {
    render() {
        const { userName } = this.props;
        return (
            <div>
                <h3>Delivery Address</h3>
                <p>User Name : <strong>{userName}</strong> </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { userName } = state.usersReducer
    return {
        userName
    }
}

export default connect(mapStateToProps)(DeliveryAddress);