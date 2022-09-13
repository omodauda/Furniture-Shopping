import { API_URL, token } from '@env';

const getUserAddress = async () => {
  const response = await fetch(`${API_URL}/user/address`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });
  if (!response.ok) {
    const resData = await response.json();
    console.log('error.response', resData)
    throw new Error(resData.message);
  }
  const resData = await response.json();
  const address = resData.data
  console.log('request.address', resData.data)
  return address;
};

export {getUserAddress}