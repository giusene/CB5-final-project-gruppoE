const loginActions = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  KEEP_SESSION_OPEN: "KEEP_SESSION_OPEN",
};

const cartActions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  BUY_COIN: "BUY_COIN",
};

const favoriteActions = {
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
};

export { loginActions, cartActions, favoriteActions };
