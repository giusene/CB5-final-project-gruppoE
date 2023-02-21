import styles from "./styles.module.scss";
import { useState, useContext } from "react";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import SignUp from "../signup/SignUp";

const LoginForm = () => {
  const { dispatch, state } = useContext(AppCtx);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: loginActions.LOGIN_USER,
      payload: { username, password },
    });
    console.log(state.users);
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
              Login
            </button>
          </div>
          <div>
            <button
              className={styles.change_btn}
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </button>
          </div>
          {console.log(signUp)}
        </div>
        {signUp === false && (
          <form onSubmit={submitHandler}>
            <input
              className={styles.login_input}
              type="text"
              name="username"
              onInput={(e) => setUsername(e.target.value)}
              placeholder="USERNAME"
              required
            />

            <input
              className={styles.login_input}
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
        {signUp === true && <SignUp setSignUp={setSignUp} />}
      </div>
    </div>
  );
};

export default LoginForm;
