import { SET_USER_TYPE } from './types';
import { INCREMENT_INDEX, DECREMENT_INDEX, SET_VARS, UPDATE_VAR, SET_ERROR, OPEN_MODAL, CLOSE_MODAL, UPDATE_RANGE } from './types';

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

export function openModal(){
  return {
    type: OPEN_MODAL,
    payload: true
  }
}

export function closeModal(){
  return {
    type: CLOSE_MODAL,
    payload: false
  }
}
