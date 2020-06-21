export default function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      const {id, amount} = action.payload;
      const cart = [...state.cart];
      const index = cart.findIndex(i => i.id === id);
      const item = cart[index] ? {...cart[index]} : {id, amount: 0};
      item.amount += amount;
      if (index === -1) {
        cart.push(item);
      } else {
        cart[index] = item;
      }
      return {
        ...state,
        cart
      };
    default:
      return state;
  }
}
