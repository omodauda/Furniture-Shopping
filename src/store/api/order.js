import { API_URL } from '@env';
import {fetchStorage} from '@store/api/asyncStorage'

const getOrders = async (status) => {
  const token = await fetchStorage('token');
  const response = await fetch(`${API_URL}/order?status=${status}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const resData = await response.json();
    throw new Error(resData.message);
  }
  const resData = await response.json();
  return resData.data;
}

export {getOrders}