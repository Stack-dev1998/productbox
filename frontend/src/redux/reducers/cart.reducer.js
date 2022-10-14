function addToCart(state, item) {
  let index = state.findIndex((el) => el.id === item.id);
  if (index !== -1) {
    let existantItem = {
      ...state[index],
      qnty: state[index].qnty+1,
    };
    state[index] = existantItem;
    return [...state];
  } else {
    return [...state, {...item,qnty:1}];
  }
}

function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADDTOCART": {
      return addToCart(state, action.payload);
    }
    case "REMOVEFROMCART": {
      return state.filter((el) => el.id !== action.payload);
    }

    default:
      return state;
  }
}
export default cartReducer;
