import { loginActions, cartActions, favoriteActions } from "./actions";

const appReducer = (state, action) => {
  switch (action.type) {
    // LOGIN
    case loginActions.LOGIN_USER:
      const user = state.users.find(
        (user) =>
          user.username === action.payload.username && user.password === action.payload.password
      );
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return {
          ...state,
          currentUser: user,
          currentBalance: user.balance || 0,
          currentCreditCard: user.creditCard,
          cart: user.cart || [],
          isLogged: true,
        };
      } else {
        return state;
      }
    // LOGOUT
    case loginActions.LOGOUT_USER:
      localStorage.removeItem("currentUser");
      return {
        ...state,
        currentUser: "",
        currentBalance: 0,
        currentCreditCard: null,
        cart: [],
        isLogged: false,
      };

    // FAVORITE COINS
    case favoriteActions.ADD_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, { ...action.payload }],
      };

    case favoriteActions.REMOVE_FAVORITE:
      console.log(action.payload);
      return {
        ...state,
        favorite: state.favorite.filter((fav) => fav.id !== action.payload.id),
      };

    // ADD TO CART
    case cartActions.ADD_TO_CART:
      const updateCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updateCart));
      return { ...state, cart: updateCart };
    // REMOVE FROM CART
    case cartActions.REMOVE_FROM_CART:
      const filteredCart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return { ...state, cart: filteredCart };
    // CLEAR CART
    case cartActions.CLEAR_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default appReducer;
