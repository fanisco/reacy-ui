export const SHOW_USER_CARD = 'OPEN_USER_CARD';
export const HIDE_USER_CARD = 'HIDE_USER_CARD';

export const showUserCard = async({dispatch, ...payload}: any) => {
  dispatch({type: SHOW_USER_CARD, payload});
};

export const hideUserCard = async({dispatch}: any) => {
  dispatch({type: HIDE_USER_CARD});
};
