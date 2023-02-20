import { initialState } from "@/store/state";

const setLocalStorage = (user) => {
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    localStorage.setItem(
      "currentUser",
      JSON.stringify(initialState.currentUser)
    );
  }
};

export default setLocalStorage;
