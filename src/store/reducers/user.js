import { combineReducers } from 'redux';

const initUserReducer = () => {
  
  const item = (state = {}, action) => {

    switch (action.type) {
      case 'FETCH_USER_BY_ID':
        return action.user;
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'IS_FETCHING_USER':
        return true;
      case 'FETCH_USER_BY_ID':
        return false;
      default:
        return state;
    }
  }

  return combineReducers({
    item,
    isFetching
  });

}

export default initUserReducer();