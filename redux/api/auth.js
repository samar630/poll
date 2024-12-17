"use client"

import axios from "axios";
export const CREATE_LOGIN = 'CREATE_LOGIN';
export const CREATE_SOLVE = 'CREATE_SOLVE';
export const FETCH_POLL = "FETCH_POLL"
export const Postauthlogin = ({ username, password }) => {
	return async (dispatch) => {
	  try {
		const login = await axios.post('https://test.omar.rs4it.com/auth', { username, password });
		console.log(login, "login");
		
		dispatch({
		  type: CREATE_LOGIN,
		  payload: { data: login.data } 
		});
	  } catch (err) {
		console.log(err, "err");

	  }
	};
  };
  export const solvepoll = (data) => {
	return async (dispatch) => {
	  try {
		const solve = await axios.post('https://test.omar.rs4it.com/poll',data);
		console.log(solve, "solve");
		
		dispatch({
		  type: CREATE_SOLVE,
		  payload: { data: solve?.data } 
		});
	  } catch (err) {
		console.log(err, "err");

	  }
	};
  };
  export const FetchPoll = () => {
	return async (dispatch) => {
	  try {
		const poll = await axios.get('https://test.omar.rs4it.com/poll');
		console.log(poll, "poll");
		dispatch({
		  type: FETCH_POLL,
		  payload: poll
		});
	  } catch (err) {
		console.log(err, "err");

	  }
	};
  };