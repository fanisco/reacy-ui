import axios from 'axios';
import {
  SET_CURRENT_USER,
  FETCH_USERS,
  SATURATE_USERS
} from '../types/Actions';

export const showUserCard = ({dispatch, ...payload}: any) => {
  dispatch({type: SET_CURRENT_USER, payload});
};

export const fetchUsers = async<T>({dispatch}: any) => {
  return fetchData<T>(FETCH_USERS, {dispatch, verb: 'get', url: 'https://jsonplaceholder.typicode.com/users'});
};

export const saturateUsers = ({dispatch}: any) => {
  dispatch({type: SATURATE_USERS});
};

const fetchData = async<T>(action: string, {dispatch, verb, url, params}: any) => {
  // dispatch({type: SET_STATUS, status: FETCHING});
  try {
    // @ts-ignore
    const res = await axios[verb]<T>(url, params);
    dispatch({type: action, payload: {data: res.data}});
    // dispatch({type: SET_STATUS, status: SUCCESS});
  } catch(e) {
    console.error('Data fetch error.', `${verb}:${action}:${url}`);
    // dispatch({type: SET_STATUS, status: ERROR});
  }
};
