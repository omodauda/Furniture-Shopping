import {API_URL } from '@env';

const userSignUp = async ({ fullName, email, password }) => {  
  const response = await fetch(`${API_URL}/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName,
      email,
      password
    })
  });
  if (!response.ok) {
    const resData = await response.json();
    throw new Error(resData.message);
  }
  const resData = await response.json();
  return resData;
}

const userLogin = async ({ email, password }) => {
  console.log('api was called')
  const response = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  if (!response.ok) {
    const resData = await response.json();
    console.log('error.response', resData)
    throw new Error(resData.message);
  }
  const resData = await response.json();
  // console.log('request', resData)
  return resData;
}

export {userSignUp, userLogin}
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/user` }),
//   endpoints: (builder) => ({
//     login: builder.query({
//       query: ({ email, password }) => ({
//         method: 'POST',
//         body: {email, password}
//       })
//     })
//   })
// })


// export const { useLoginQuery } = userApi;