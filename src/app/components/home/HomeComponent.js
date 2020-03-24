import React from 'react';
import { connect } from "react-redux";

import CoreHttpService from '../../core/config/CoreHttpHandler';
import { AddUser } from "../../redux/actions/taskAction";

class Home extends React.Component {

    constructor(props) {
      super(props);
    }

    // getting all users
    getUsers = () => {

        let params = {
            id: '1'
        }

        CoreHttpService.request('users', 'listing', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }

    // creating new user normally
    addUser = () => {
        let params = {
            "name": "morpheus",
            "job": "leader"
        }

        CoreHttpService.request('users', 'add_user', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }

    // creating new user using Redux-Thunk
    addNewUser = () => {
        let data = {
            "name": "muhammad awais",
            "job": "developer"
        }

        this.props.submit(
            data
        );
    }

    // getting a single user
    getUser = () => {
        let params = {
            "key": 'id',
            "value": 1
        }

        CoreHttpService.request('users', 'get_user', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
} 

    // update a user
    updateUser = () => {
        let params = {
            "key": 'id',
            "value": 1,
            params: {
                "name": "xyz user",
                "job": "xyz resident"
            }
        }

        CoreHttpService.request('users', 'update_user', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    } 

    // delete a user
    deleteUser = () => {
        let params = {
            "key": 'id',
            "value": 1,
        }

        CoreHttpService.request('users', 'delete_user', params, (response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <span>Home Component</span>
                <br /><br />
                <a onClick={this.getUsers}>get users</a>
                <br />
                <a onClick={this.addUser}>add user</a>
                <br />
                <a onClick={this.addNewUser}>add user using redux-thunk</a>
                <br />
                <a onClick={this.getUser}>get user</a>
                <br />
                <a onClick={this.updateUser}>update user</a>
                <br />
                <a onClick={this.deleteUser}>delete user</a>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.task.Categories
});

const mapDispacthToProps = dispatch => {
    return {
        submit: (data) => {
            dispatch(AddUser(data))
        }
    };
};
// export default withStyles(styles)(ProductList);
export default connect(
    mapStateToProps,
    mapDispacthToProps
)(Home);