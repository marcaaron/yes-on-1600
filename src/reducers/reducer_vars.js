import {SET_VARS, UPDATE_VAR} from '../actions/types';

export default function(state = [], action){
  switch(action.type){
    case SET_VARS:
      return action.payload;
    case UPDATE_VAR:
      let newVars = [...state];
      newVars[action.payload.index] = action.payload.variable;
      return newVars;
    default:
    return state;
  }
};
