import { UPDATE_RANGE } from '../actions/types';

export default function(state = 50, action){
  switch(action.type){
    case UPDATE_RANGE:
      return action.payload;
    default:
    return state;
  }
};
