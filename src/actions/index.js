import * as api from '../api';

export const fetchUsers = () => dispatch => {
  dispatch({ type: 'IS_FETCHING_USERS' });
  const users = api.fetchUsers();
  return dispatch({
    type: 'FETCH_USERS',
    users
  });
}

export const fetchUserById = userId => dispatch => {
  dispatch({ type: 'IS_FETCHING_USER' });
  const user = api.fetchUserById(userId);
  return dispatch({
    type: 'FETCH_USER_BY_ID',
    user
  });
}

export const fetchActivitiesInRange = (userId, from, to) => dispatch => {
  dispatch({ type: 'IS_FETCHING_ACTIVITIES' });
  const activities = api.fetchActivitiesInRange(userId, from, to);
  return dispatch({
    type: 'FETCH_USER_ACTIVITIES_BY_ID',
    activities
  });
}

export const fetchAllActivitiesByUserId = (userId) => dispatch => {
  dispatch({ type: 'IS_FETCHING_ACTIVITIES' });
  const activities = api.fetchAllActivitiesByUserId(userId);
  return dispatch({
    type: 'FETCH_ALL_USER_ACTIVITIES_BY_ID',
    activities
  });
}

