import {
    GET_USERS,
    GET_PRODUCTS,
  } from "./actions";

import CoreHttpService from '../../core/config/CoreHttpHandler';

export const GetUsers = () => {
    console.log("GetUsers");
    
    return dispatch => {
        console.log("GetUsers dispatch");

        let params = {
            id: '1'
        }
    
        CoreHttpService.request('users', 'listing', params, (response) => {
            console.log(response);

            dispatch({
                type: GET_USERS,
                users: response
            });
    
        }, (error) => {
            console.log(error);
        });
    };
};

export const AddUser = (params) => {
    console.log("AddUser");
    
    return dispatch => {
        console.log("Add User dispatch");
    
        CoreHttpService.request('users', 'add_user', params, (response) => {
            console.log(response);

            // dispatch the updated users to update store
            CoreHttpService.request('users', 'listing', params, (response) => {
                console.log(response);
    
                dispatch({
                    type: GET_USERS,
                    users: response
                });
        
            }, (error) => {
                console.log(error);
            });
    
        }, (error) => {
            console.log(error);
        });
    };
};

export const UpdateUser = (params) => {
    console.log("UpdateUser");
    
    return dispatch => {
        console.log("Update User dispatch");
    
        CoreHttpService.request('users', 'update_user', params, (response) => {
            console.log(response);

            // dispatch the updated users to update store
            CoreHttpService.request('users', 'listing', params, (response) => {
                console.log(response);
    
                dispatch({
                    type: GET_USERS,
                    users: response
                });
        
            }, (error) => {
                console.log(error);
            });
    
        }, (error) => {
            console.log(error);
        });
    };
};

export const GetProducts = () => {
    console.log("GetProducts");
    
    return dispatch => {
        console.log("GetProducts dispatch");

        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                
                dispatch({
                    type: GET_PRODUCTS,
                    products: result
                });
            },
            (error) => {
                console.log(error);
            }
        )
    };
};