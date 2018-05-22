import { SET_ERROR } from '../actions/types';

export default function(state = '', action){
  switch(action.type){
    case SET_ERROR:
      return action.payload;
    default:
    return state;
  }
};
