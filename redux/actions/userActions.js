export const setUser = (userInfo) => ({
  type: 'SET_USER_INFO',
  payload: userInfo,
});


export const setUserImage = (userImg) => ({
  type: 'SET_USER_IMAGE',
  payload: userImg,
});

export const clearUserInfo = () => ({
  type: 'CLEAR_USER_INFO',
});

// actions/shopActions.js
export const setShopType = (shopType) => ({
  type: 'SET_SHOP_TYPE',
  payload: shopType,
});


export const addToCart = ({ item, id,shop }) => {

  return {
    type: 'ADD_TO_CART',
    payload: {
      id: id, // Correctly assign id
      item: item,
      shop:shop
    },
  };
};

export const handleIncrement = ({  id }) => {

  return {
    type: 'HANDLE_INCREMENT',
    payload:id
  };
};

export const handleDecrement = ({ item, id }) => {

  return {
    type: 'HANDLE_DECREMENT',
    payload: id
  };
};



export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  };
};

export const updateQty = (id, qty) => {
  return {
    type: 'UPDATE_QTY',
    payload: { id, qty },
  };
};
