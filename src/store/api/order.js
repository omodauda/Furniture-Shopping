import {API_URL} from '@constants/url';
import {fetchStorage} from '@store/api/asyncStorage';
import {requestTimeout} from '@utils/request';

const getOrders = async status => {
  const token = await fetchStorage('token');
  const response = await requestTimeout(
    fetch(`${API_URL}/order?status=${status}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
  );
  if (!response.ok) {
    const resData = await response.json();
    throw new Error(resData.message);
  }
  const resData = await response.json();
  return resData.data;
};

export {getOrders};
