import { 
    GET_USERS,
  } from "../actions/actions";
  
  const INITIAL_STATE = {
    Users: [],
    loading : false,
  };
  
  export default (state = INITIAL_STATE, action) => {
    //  console.log("task reducer"  , action);
  
    switch (action.type) {
      case GET_USERS: {
        return {
          ...state,
          Users: action.users,
          loading: false
        };
      }
      default:
        return state;
    }
  };
  