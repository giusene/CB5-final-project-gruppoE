const loginActions = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  KEEP_SESSION_OPEN: "KEEP_SESSION_OPEN",
};
const signupActions = {
  SIGNUP_USER: "SIGNUP_USER",
};
const cartActions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  BUY_COIN: "BUY_COIN",
  UPDATE_PRICE: "UPDATE_PRICE",
};

const favoriteActions = {
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
};

export { loginActions, signupActions, cartActions, favoriteActions };
