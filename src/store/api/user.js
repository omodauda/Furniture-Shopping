import { API_URL } from '@env';
import {storeData} from '@store/api/asyncStorage'

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
  return resData.message;
}

const userLogin = async ({ email, password }) => {
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
  await storeData('token', resData.token)
  return resData.data;
};

export {userSignUp, userLogin}