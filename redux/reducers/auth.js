
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
  const rootReducer = combineReducers({
    user: reducerLogin,
  });
  
  export default rootReducer;
 

  