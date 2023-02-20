import { loginActions, cartActions, favoriteActions } from "./actions";
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
        return state;
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
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return { ...state, cart: action.payload };
    /*     // REMOVE FROM CART
    case cartActions.REMOVE_FROM_CART:
      const filteredCart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return { ...state, cart: filteredCart }; */
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
