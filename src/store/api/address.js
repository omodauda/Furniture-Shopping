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

const setDefaultAddress = async (id) => {
  const response = await fetch(`${API_URL}/user/address/default/${id}`, {
    method: 'PATCH',
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
  console.log('request.default-address', resData.message)
  return resData.message;
};

const addUserAddress = async ({ fullName, address, postalCode, country, city }) => {
  const response = await fetch(`${API_URL}/user/address`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      fullName,
      address,
      postalCode,
      country,
      city
    })
  });
  if (!response.ok) {
    const resData = await response.json();
    console.log('error.response', resData)
    throw new Error(resData.message);
  }
  const resData = await response.json();
  console.log('request.addAddress', resData.message)
  return resData.message;
}

export {getUserAddress, setDefaultAddress, addUserAddress}