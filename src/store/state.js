import users from "./users";

const initialState = {
  users: users,
  currentUser: "",
  currentBalance: 0,
  currentCreditCard: null,
  cart: [],
  isLogged: false,
};

export { initialState };
