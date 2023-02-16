import styles from "./styles.module.scss";
import { useState, useContext } from "react";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";

const LoginForm = () => {
  const { dispatch } = useContext(AppCtx);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            <a href="#">SIGNIN</a>
          </div>
          <div>
            <a href="#">SIGNUP</a>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default LoginForm;
