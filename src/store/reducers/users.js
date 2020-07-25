import { combineReducers } from 'redux';

const initUsersReducer = () => {

  const items = (state = [], action) => {

    switch (action.type) {
      case 'FETCH_USERS':
        return action.users;
      default:
        return state;
    }
    
  }

  const isFetching = (state = false, action) => {

    switch (action.type) {
      case 'IS_FETCHING_USERS':
        return true;
      case 'FETCH_USERS':
        return false; 
      default:
        return state;
    }
    
  }

  return combineReducers({
    items,
    isFetching
  });

}

export default initUsersReducer();