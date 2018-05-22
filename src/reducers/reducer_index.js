import { INCREMENT_INDEX, DECREMENT_INDEX } from '../actions/types';

export default function(state = -1, action){
  let newState = state;
  switch(action.type){
    case INCREMENT_INDEX:
      newState = state + 1;
      return newState;
    case DECREMENT_INDEX:
      newState = state - 1;
      return newState;
    default:
    return state;
  }
};
