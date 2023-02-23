const loginActions = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  KEEP_SESSION_OPEN: "KEEP_SESSION_OPEN",
};

const signupActions = {
  SIGNUP_USER: "SIGNUP_USER",
  AUTH_SWITCHER: "AUTH_SWITCHER",
};

const cartActions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  BUY_COIN: "BUY_COIN",
  UPDATE_PRICE: "UPDATE_PRICE",
  MODAL_TIMER: "MODAL_TIMER",
};

const favoriteActions = {
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
};

const tradingActions = {
  SELL_COIN: "SELL_COIN",
};

export { loginActions, signupActions, cartActions, favoriteActions, tradingActions };
