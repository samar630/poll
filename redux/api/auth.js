"use client"

import axios from "axios";
export const CREATE_LOGIN = 'CREATE_LOGIN';
// export const Postauthlogin = async ({username, password}) => {

// 	try {
// 	  const login = await axios.post('https://test.omar.rs4it.com/auth',{username, password})
// 	  console.log(login, "login")
// 	  return login
//       dispatch({
// 		type : CREATE_LOGIN,
// 		payload :{ data: login?.data}
// 	  })
// 	} catch(err) {
// 	  return console.log(err, "err")
	  
// 	}

//   }
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