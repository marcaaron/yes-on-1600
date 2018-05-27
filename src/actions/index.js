import { SET_USER_TYPE } from './types';
import { INCREMENT_INDEX, DECREMENT_INDEX, SET_VARS, UPDATE_VAR, SET_ERROR, UPDATE_RANGE, BUSINESS_RESULTS, INDIVIDUAL_RESULTS } from './types';

import { businessCalc } from '../helpers/business-calc';
import { individualCalc } from '../helpers/individual-calc';

export function setUserType(userType){
  return {
    type: SET_USER_TYPE,
    payload: userType
  }
}

export function incIndex(){
  return {
    type: INCREMENT_INDEX
  }
}

export function decIndex(){
  return {
    type: DECREMENT_INDEX
  }
}

export function setVars(vars){
  return {
    type: SET_VARS,
    payload: vars
  }
}

export function updateVar(variable, index){
  return {
    type: UPDATE_VAR,
    payload: {variable, index}
  }
}

export function updateRange(variable){
  return{
    type: UPDATE_RANGE,
    payload: variable
  }
}

export function setError(message){
  return {
    type: SET_ERROR,
    payload: message
  }
}

export function getBusinessResults(...data){
  const results = businessCalc(...data);
  console.log(results);
  return {
    type: BUSINESS_RESULTS,
    payload: results
  }
}

export function getIndividualResults(...data){
  const results = individualCalc(...data);
  return {
    type: INDIVIDUAL_RESULTS,
    payload: results
  }
}
