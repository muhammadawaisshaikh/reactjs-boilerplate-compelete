import { 
    GET_USERS,
    GET_PRODUCTS
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
      case GET_PRODUCTS: {
        return {
          ...state,
          Products: action.products,
          loading: false
        };
      }
      default:
        return state;
    }
  };
  