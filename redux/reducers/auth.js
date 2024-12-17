
"use client"

import { combineReducers } from "redux"


  const initialState = {
    data: []
 
  }
  
const reducerLogin = (state = initialState, {type, payload}) => {
  console.log(payload?.data, "payload")
    switch(type) {
      case 'CREATE_LOGIN':
        return {
          ...state,
        data: payload?.data,
        token: localStorage.setItem('token', payload?.data?.data?.token)
        }
      default:
        return state
    }
  }
  const reducerSolve = (state = initialState, {type, payload}) => {
    console.log(payload?.data, "payload")
      switch(type) {
        case 'CREATE_SOLVE':
          return {
            ...state,
          data: payload?.data,
          }
        default:
          return state
      }
    }
  const fetchPoll = (state = initialState, {type, payload}) => {
    console.log(payload?.data, "payload")
      switch(type) {
        case 'FETCH_POLL':
          return {
            ...state,
          data: payload?.data
          }
        default:
          return state
      }
    }
  const rootReducer = combineReducers({
    user: reducerLogin,
    poll: fetchPoll,
    solve : reducerSolve
  });
  
  export default rootReducer;
 

  