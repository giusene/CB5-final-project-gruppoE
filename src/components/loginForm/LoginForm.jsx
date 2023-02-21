import styles from "./styles.module.scss";
import { useState, useContext } from "react";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import SignupForm from "../signupForm/SignupForm";

const LoginForm = () => {
  const { dispatch } = useContext(AppCtx);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: loginActions.LOGIN_USER,
      payload: { username, password },
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.login_nav}>
          <div className={`${styles.login_nav__item} ${styles.active}`}>
            <button
              className={styles.change_btn}
              onClick={() => setSignUp(false)}
            >
              SIGNIN
            </button>
          </div>
          <div>
            <button
              className={styles.change_btn}
              onClick={() => setSignUp(true)}
            >
              SIGNUP
            </button>
          </div>
        </div>
        {!signUp && (
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="username"
              onInput={(e) => setUsername(e.target.value)}
              placeholder="USERNAME"
              required
            />

            <input
              type="password"
              name="password"
              onInput={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              required
            />

            <div className={styles.btn}>
              <button type="submit">SIGN IN</button>
            </div>
          </form>
        )}
        {signUp && <SignupForm setSignUp={setSignUp} />}
      </div>
    </div>
  );
};

export default LoginForm;
