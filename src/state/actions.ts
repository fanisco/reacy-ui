export const addComment = async({dispatch, ...payload}: any) => {
  dispatch({type: 'ADD_COMMENT', payload});
};

export const setSettings = ({dispatch, ...payload}: any) => {
  dispatch({type: 'SET_SETTINGS', payload});
};

// const fetchData = async (action, {dispatch, verb, url, params}) => {
//     dispatch({type: SET_STATUS, status: FETCHING});
//     try {
//         const res = await axios[verb](url, params);
//         dispatch({type: action, data: res.data});
//         dispatch({type: SET_STATUS, status: SUCCESS});
//     } catch(e) {
//         dispatch({type: SET_STATUS, status: ERROR});
//     }
// };
