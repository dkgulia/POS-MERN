const initialState = {
  loading: false,
  cartItems: []
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'updateCart':
      console.log('Updating cart with:', action.payload);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
