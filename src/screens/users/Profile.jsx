import React from 'react'
import {connect} from 'react-redux';
import {handleNameChange} from '../../store/actions/users-actions'

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h3>Profile Component</h3>
                <div className="form-group">
                    <input type="text" placeholder="Enter user name" name="userName" 
                    onChange={this.props.handleOnChange}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const {userName }  = state.usersReducer
    console.log(state, "<--------------state in Profile Component-------->")
    return { 
        userName
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnChange : (e) => dispatch(handleNameChange(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);