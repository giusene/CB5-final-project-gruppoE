import styles from "./styles.module.scss";
import { useState } from "react";
import LoginForm from "../loginForm/LoginForm";
import SignupForm from "../signupForm/SignupForm";

const AuthCard = () => {
  const [switcher, setSwitcher] = useState("signin");

  return (
    <div className={styles.main}>
      <div className={styles.labels}>
        <p
          className={
            switcher === "signin"
              ? `${styles.label} ${styles.selected}`
              : `${styles.label}`
          }
          onClick={() => setSwitcher("signin")}
        >
          SIGNIN
        </p>
        <p
          className={
            switcher === "signup"
              ? `${styles.label} ${styles.selected}`
              : `${styles.label}`
          }
          onClick={() => setSwitcher("signup")}
        >
          SIGNUP
        </p>
      </div>

      {switcher === "signin" ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthCard;
