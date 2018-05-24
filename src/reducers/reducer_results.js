import { INDIVIDUAL_RESULTS, BUSINESS_RESULTS } from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
    case INDIVIDUAL_RESULTS:
      return action.payload;
    case BUSINESS_RESULTS:
    console.log(action.payload);
      return action.payload;
    default:
    return state;
  }
};
