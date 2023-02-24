import styles from "./styles.module.scss";
import { useState, useContext } from "react";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import { BsExclamationSquare } from "react-icons/bs";
import { Fragment } from "react";

const LoginForm = () => {
  const { state, dispatch } = useContext(AppCtx);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: loginActions.LOGIN_USER,
      payload: { username, password },
    });
  };

  const switcherHandler = (str) => {
    dispatch({
      type: signupActions.AUTH_SWITCHER,
      payload: str,
    });
  };

  return (
    <Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        {state.isSignedUp && (
          <div className={styles.signup_message}>
            Your account has been created successfully!
          </div>
        )}

        <div className={styles.inputs}>
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
          {state.loginError && (
            <div className={styles.error}>
              <i>
                <BsExclamationSquare />
              </i>
              <p>Invalid username or password!</p>
            </div>
          )}
        </div>

        <div className={styles.btn}>
          <button type="submit">SIGN IN</button>
        </div>
      </form>
    </Fragment>
  );
};

export default LoginForm;
