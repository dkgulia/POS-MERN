// CustomizedBadges.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CustomizedBadges = () => {
  const cartItems = useSelector(state => state.rootReducer.cartItems || []);
  const totalItemsInCart = cartItems.length;

  return (
    <div>
      <ShoppingCartIcon />
      <span>{totalItemsInCart}</span>
    </div>
  );
};

export default CustomizedBadges;
