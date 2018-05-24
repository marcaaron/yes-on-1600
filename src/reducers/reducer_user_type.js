import {SET_USER_TYPE} from '../actions/types';

export default function(state = '', action){
  switch(action.type){
    case SET_USER_TYPE:
    return action.payload;
    default:
    return state;
  }
};
