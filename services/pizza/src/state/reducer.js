export default function reducer(state, action) {
  switch(action.type) {
    case 'CART_ITEM_ADD': {
      const {id, amount} = action.payload;
      const cart = [...state.cart];
      const [index, item] = getItem(id, cart);
      item.amount += amount;
      setItem(item, index, cart);
      return {
        ...state,
        cart
      };
    }
    case 'CART_ITEM_REMOVE': {
      const {id} = action.payload;
      const cart = [...state.cart];
      const [index] = getItem(id, cart);
      cart.splice(index, 1);
      return {
        ...state,
        cart
      };
    }
    case 'CART_ITEM_AMOUNT': {
      const {id, amount} = action.payload;
      const cart = [...state.cart];
      const [index, item] = getItem(id, cart);
      item.amount = amount > 0 ? amount : 1;
      setItem(item, index, cart);
      return {
        ...state,
        cart
      };
    }
    default:
      return state;
  }
}

const getItem = (id, cart) => {
  const index = cart.findIndex(item => item.id === id);
  const item = cart[index] ? {...cart[index]} : {id, amount: 0};
  return [index, item];
};

const setItem = (item, index, cart) => {
  if (index === -1) {
    cart.push(item);
  } else {
    cart[index] = item;
  }
};
