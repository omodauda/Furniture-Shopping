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

export {userSignUp}