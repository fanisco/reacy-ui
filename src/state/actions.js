export const addToCart = async({dispatch, id, amount}) => {
  dispatch({type: 'ADD_TO_CART', payload: {id, amount}});
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
