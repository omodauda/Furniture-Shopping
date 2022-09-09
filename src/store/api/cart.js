import { API_URL } from '@env';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxZTY0Njg3LTllODktNDUyYy1iMDdiLTVmMmQ4Mjg3YWZhZiIsImlhdCI6MTY2MjY1ODI5OCwiZXhwIjoxNjYyNzQ0Njk4fQ.ZWFSHDTygCr4FWuYjQ2_hGMgVrZsnqUrkHHYpzKiPuA'

const getUserCart = async () => {
  const response = await fetch(`${API_URL}/cart`, {
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
  const cart = resData.data
  console.log('request.cart', resData.data)
  return cart;
}

export {getUserCart}
