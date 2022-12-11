import React from 'react'
import Users from './users'
import Orders from './orders'
import Products from './products';

class Home extends React.Component {
    render() {
        return (
            <div className="page__wrapper">
                <h1>React Redux App with Middleware</h1>
                <div className="section__wrapper">
                    <div className="section__container">
                        <Users />
                    </div>
                    <div className="section__container">
                        <Products />
                    </div>
                    <div className="section__container">
                        <Orders />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;