import { users } from "./users";

const initialState = {
  users: users,
  currentUser: "",
  isLogged: false,
  loginError: false,
  usernameError: false,
  emailError: false,
  pswError: false,
};

export { initialState };
