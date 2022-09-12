import { API_URL, token } from '@env';

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
};

const addToCart = async ({ productId, quantity }) => {
  console.log(productId);
  console.log('qty', quantity)
  const response = await fetch(`${API_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId,
      quantity
    })
  });
  if (!response.ok) {
    const resData = await response.json();
    console.log('error.response', resData)
    throw new Error(resData.message);
  }
  const resData = await response.json();
  console.log('response.addToCart', resData);
  return resData;
}

const removeFromCart = async (cartItemId) => {
  const response = await fetch(`${API_URL}/cart/${cartItemId}`, {
    method: 'DELETE',
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
  return resData;
}

const updateCartItem = async ({ cartItemId, quantity }) => {
  console.log('cartItemId', cartItemId)
  const response = await fetch(`${API_URL}/cart/${cartItemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      quantity
    })
  });
  if (!response.ok) {
    const resData = await response.json();
    throw new Error(resData.message);
  }
  const resData = await response.json();
  return resData;
}

export {getUserCart, addToCart, removeFromCart, updateCartItem}
