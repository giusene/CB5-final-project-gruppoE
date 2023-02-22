import styles from "./styles.module.scss";
import { useContext } from "react";
import LoginForm from "../loginForm/LoginForm";
import SignupForm from "../signupForm/SignupForm";
import { AppCtx } from "@/store/context";
import { signupActions } from "@/store/actions";

const AuthCard = () => {
  const { state, dispatch } = useContext(AppCtx);

  const switcherHandler = (str) => {
    dispatch({
      type: signupActions.AUTH_SWITCHER,
      payload: str,
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.labels}>
        <p
          className={
            state.switcher === "signin"
              ? `${styles.label} ${styles.selected}`
              : `${styles.label}`
          }
          onClick={() => switcherHandler("signin")}
        >
          SIGNIN
        </p>
        <p
          className={
            state.switcher === "signup"
              ? `${styles.label} ${styles.selected}`
              : `${styles.label}`
          }
          onClick={() => switcherHandler("signup")}
        >
          SIGNUP
        </p>
      </div>

      {state.switcher === "signin" ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthCard;
