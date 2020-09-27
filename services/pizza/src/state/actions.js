export const cartItemAdd = async({dispatch, id, amount}) => {
  dispatch({type: 'CART_ITEM_ADD', payload: {id, amount}});
};

export const cartItemRemove = async({dispatch, id, amount}) => {
  dispatch({type: 'CART_ITEM_REMOVE', payload: {id, amount}});
};

export const cartItemAmount = async({dispatch, id, amount}) => {
  dispatch({type: 'CART_ITEM_AMOUNT', payload: {id, amount}});
}

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
