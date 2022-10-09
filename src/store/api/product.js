import {API_URL} from '@constants/url';
import {requestTimeout} from '@utils/request';

const getCategories = async name => {
  const response = await requestTimeout(
    fetch(`${API_URL}/product/categories?name=${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  );
  if (!response.ok) {
    const resData = await response.json();
    console.log('error.response', resData);
    throw new Error(resData.message);
  }
  const resData = await response.json();
  const products = resData.data.products;
  // console.log('products', resData.data)
  return products;
};

const getProductById = async productId => {
  const response = await requestTimeout(
    fetch(`${API_URL}/product/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  );
  if (!response.ok) {
    const resData = await response.json();
    console.log('error.response', resData);
    throw new Error(resData.message);
  }
  const resData = await response.json();
  return resData.data;
};

export {getCategories, getProductById};
