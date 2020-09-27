import {Action} from 'redux';

const initialState = {
  data: {
    units: 'cm',
    color: 'cl',
    width: '',
    depth: ''
  }
};

export const calcFormReducer = (state = initialState, {type, payload}: Action<any> & {payload: any}) => {
  switch (type) {
    default: return state;
  }
};
