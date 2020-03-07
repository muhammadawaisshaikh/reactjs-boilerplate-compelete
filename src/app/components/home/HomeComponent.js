import React from 'react';

import CoreHttpService from '../../core/config/CoreHttpHandler';

// getting all users
const getUsers = () => {

    let params = {
        id: '1'
    }

    CoreHttpService.request('users', 'listing', params, (response) => {
        console.log(response);

    }, (error) => {
        console.log(error);
    });
}

// creating new user 
const addUser = () => {
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
const getUser = () => {
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
const updateUser = () => {
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
const deleteUser = () => {
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

export default function Home() {
    return (
        <div>
            <span>Home Component</span>
            <br /><br />
            <a onClick={getUsers}>get users</a>
            <br />
            <a onClick={addUser}>add user</a>
            <br />
            <a onClick={getUser}>get user</a>
            <br />
            <a onClick={updateUser}>update user</a>
            <br />
            <a onClick={deleteUser}>delete user</a>
        </div>
    );
}