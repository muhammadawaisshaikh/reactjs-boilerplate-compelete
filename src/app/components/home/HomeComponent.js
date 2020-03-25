import React from 'react';
import { connect } from "react-redux";

import CoreHttpService from '../../core/config/CoreHttpHandler';
import { AddUser, UpdateUser } from "../../redux/actions/taskAction";

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

    // update a user using Redux-Thunk
    updateTheUser = () => {
        let params = {
            "key": 'id',
            "value": 1,
            params: {
                "name": "xyz user",
                "job": "xyz job"
            }
        }

        this.props.update(
            params
        );
    }

    render() {
        console.log("this.props.Users : ",this.props.Users);
        console.log("this.props.Products : ",this.props.Products);
        
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Home Component</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="alert alert-secondary" role="alert">
                        <b>Normal</b> Http API Calls
                    </div>
                    <div>
                        <a className="btn btn-primary mx-2" href="#" role="button" onClick={this.getUsers}>get users</a>
                        <a className="btn btn-primary mx-2" href="#" role="button" onClick={this.addUser}>add user</a>
                        <a className="btn btn-primary mx-2" href="#" role="button" onClick={this.getUser}>get user</a>
                        <a className="btn btn-primary mx-2" href="#" role="button" onClick={this.updateUser}>update user</a>
                        <a className="btn btn-primary mx-2" href="#" role="button" onClick={this.deleteUser}>delete user</a>
                    </div>

                    <div className="alert alert-success mt-5" role="alert">
                        <b>Redux-Thunk</b> Http API Calls
                    </div>
                    <div>
                        <a className="btn btn-primary mx-2" href="#" role="button" onClick={this.addNewUser}>add user using redux-thunk</a>
                        <a className="btn btn-primary mx-2" href="#" role="button" onClick={this.updateTheUser}>update user using redux-thunk</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Users: state.task.Users,
    Products: state.task.Products
});

const mapDispacthToProps = dispatch => {
    return {
        submit: (data) => {
            dispatch(AddUser(data))
        },
        update: (data) => {
            dispatch(UpdateUser(data))
        }
    };
};
// export default withStyles(styles)(ProductList);
export default connect(
    mapStateToProps,
    mapDispacthToProps
)(Home);