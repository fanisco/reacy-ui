import {Action} from 'redux';

const initialState = {

};

export const calcDisplayReducer = (state = initialState, {type, payload}: Action<any> & {payload: any}) => {
  switch (type) {
    default: return state;
  }
};
