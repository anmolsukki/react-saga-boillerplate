import React from 'react';
import { connect } from 'react-redux';
import { loadUsers } from "../Redux/Actions/UserAction";
import Loader from "../Containers/Loader/Loader";

class First extends React.Component {

    componentDidMount() {
        this.props.loadUsers();
    };

    render() {
        if (this.props.loading) {
            return <div><Loader /></div>
        }
        else if (this.props.error) {
            return <div style={{color: 'red'}}>ERROR: {this.props.error}</div>
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>isActive</th>
                        <th>Posts</th>
                        <th>Messages</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.data.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.active ? 'Yes' : 'No'}</td>
                            <td>{user.posts}</td>
                            <td>{user.messages}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    data: state.userReducer.data,
    loading: state.userReducer.loading,
    error: state.userReducer.error
});

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(loadUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(First);
