import {
    GET_USERS
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