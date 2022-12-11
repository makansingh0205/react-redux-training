import React from 'react'
import { connect } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { fetchUsers } from '../../store/actions/users-actions'
import Profile from './Profile'

class Users extends React.Component {

    componentDidMount() {
        this.props.handleFetchUsers()
    }

    render() {
        const { usersList, loading, errorMessage } = this.props
        console.log(loading, '<---------------------- Users Component ---------------------->')
        return (
            <div>
                <h2>Users Component</h2>
                <h3>User List</h3>
                {loading &&
                   <>
                    <ClipLoader color={'#50E3C2'} loading={true} size={30} />
                    <p>Loading ...</p>
                    </>
                }
                {errorMessage &&
                  <div className='error'>
                      <p><strong>Error: </strong>{errorMessage.message}</p>
                    </div>
                }
                <ul className='users__list'>
                    {usersList && usersList.map((user, index) =>
                        <li key={index}>
                            <div className='users__list-item'>
                                <h3><strong>Name:</strong>{user.name}</h3>
                                <p><strong>Email:</strong>{user.name} ({user.email})</p>
                            </div>
                        </li>
                    )}
                </ul>
                <Profile />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, "<--------------state in Users Component-------->")
    const { userName, loading, usersList, errorMessage } = state.usersReducer
    return {
        userName,
        loading,
        usersList,
        errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);