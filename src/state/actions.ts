import axios from 'axios';

export const SHOW_USER_CARD = 'OPEN_USER_CARD';
export const HIDE_USER_CARD = 'HIDE_USER_CARD';
export const FETCH_USERS = 'FETCH_USERS';

export const showUserCard = ({dispatch, ...payload}: any) => {
  dispatch({type: SHOW_USER_CARD, payload});
};

export const hideUserCard = ({dispatch}: any) => {
  dispatch({type: HIDE_USER_CARD});
};

export const fetchUsers = async<T>({dispatch}: any) => {
  return fetchData<T>(FETCH_USERS, {dispatch, verb: 'get', url: 'https://jsonplaceholder.typicode.com/users'});
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
