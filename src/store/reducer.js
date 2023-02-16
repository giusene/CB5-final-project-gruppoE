import { loginActions } from "./actions";

const appReducer = (state, action) => {
  if (action.type === loginActions.LOGIN_USER) {
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
      return state, console.log("username o password non validi");
    }
  }

  if (action.type === loginActions.LOGOUT_USER) {
    localStorage.removeItem("currentUser");
    return {
      ...state,
      currentUser: "",
      currentBalance: 0,
      currentCreditCard: null,
      cart: [],
      isLogged: false,
    };
  }
};

export default appReducer;
