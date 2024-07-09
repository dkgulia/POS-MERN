// TotalItemsCounter.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import CustomizedBadges from '../Components/CustomizedBadges'; // Adjust import path as per your project structure

const TotalItemsCounter = () => {
  const cartItems = useSelector(state => state.rootReducer.cartItems || []);

  return (
    <CustomizedBadges totalItems={cartItems.length} />
  );
};

export default TotalItemsCounter;
