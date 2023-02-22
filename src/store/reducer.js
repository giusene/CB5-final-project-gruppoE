import {
  loginActions,
  cartActions,
  favoriteActions,
  signupActions,
} from "./actions";
import setLocalStorage from "@/utils/localstorage";
const appReducer = (state, action) => {
  switch (action.type) {
    // LOGIN
    case loginActions.LOGIN_USER:
      const user = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );
      if (user) {
        setLocalStorage(user);
        return {
          ...state,
          currentUser: user,
          isLogged: true,
        };
      } else {
        return { ...state, loginError: true };
      }
    // LOGOUT
    case loginActions.LOGOUT_USER:
      localStorage.removeItem("currentUser");
      return {
        ...state,
        currentUser: "",
        isLogged: false,
      };
    // KEEP_SESSION_OPEN
    case loginActions.KEEP_SESSION_OPEN:
      return { ...state, currentUser: action.payload, isLogged: true };
    // SIGNUP_USER
    case signupActions.SIGNUP_USER:
      const existsUser = state.users.find(
        (user) => user.username === action.payload.username
      );
      const existsEmail = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (existsUser) {
        return { ...state, usernameError: true };
      }
      if (existsEmail) {
        return { ...state, emailError: true };
      }
      if (action.payload.password.length < 6) {
        return { ...state, pswError: true };
      }
      return {
        ...state,
        users: [...state.users, action.payload],
        switcher: "signin",
      };
    // AUTH SWITCHER
    case signupActions.AUTH_SWITCHER:
      return { ...state, switcher: action.payload };
    // FAVORITE COINS
    case favoriteActions.ADD_FAVORITE:
      const newState = {
        ...state,
        currentUser: {
          ...state.currentUser,
          favorite: [...state.currentUser.favorite, action.payload],
        },
      };
      setLocalStorage(newState.currentUser);
      return newState;

    case favoriteActions.REMOVE_FAVORITE:
      const filteredState = {
        ...state,
        currentUser: {
          ...state.currentUser,
          favorite: state.currentUser.favorite.filter(
            (fav) => fav.id !== action.payload.id
          ),
        },
      };
      setLocalStorage(filteredState.currentUser);
      return filteredState;

    // ADD TO CART
    case cartActions.ADD_TO_CART:
      const addCartState = {
        ...state,
        currentUser: {
          ...state.currentUser,
          cart: [...state.currentUser.cart, action.payload],
        },
      };
      setLocalStorage(addCartState.currentUser);
      return addCartState;
    // CLEAR CART
    case cartActions.CLEAR_CART:
      const clearCart = {
        ...state,
        currentUser: {
          ...state.currentUser,
          cart: [],
        },
      };
      setLocalStorage(clearCart.currentUser);
      return clearCart;

    // BUY COIN
    case cartActions.BUY_COIN:
      const buyState = {
        ...state,
        currentUser: {
          ...state.currentUser,
          assets: {
            coins: [...state.currentUser.assets.coins, action.payload],
          },
          cart: [],
        },
      };

      setLocalStorage(buyState.currentUser);
      return buyState;

    case cartActions.UPDATE_PRICE:
      state.currentUser.assets.coins[action.payload.index].coin.current_price =
        action.payload.new_price;

      setLocalStorage(state.currentUser);
      return state;

    default:
      return state;
  }
};

export default appReducer;
