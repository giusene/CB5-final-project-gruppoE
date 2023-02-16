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
      <div className={styles.login_container}>
        <form onSubmit={submitHandler} className={styles.form_login}>
          <ul className={styles.login_nav}>
            <li className={`${styles.login_nav__item} ${styles.active}`}>
              <a href="#">Sign In</a>
            </li>
            <li className={styles.login_nav__item}>
              <a href="#">Sign Up</a>
            </li>
          </ul>

          <div className={styles.wrapper}>
            <div className={styles.username}>
              <p className={styles.login_label}>Username</p>
              <input
                className={styles.login_input}
                type="text"
                name="username"
                onInput={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className={styles.password}>
              <p className={styles.login_label}>Password</p>
              <input
                className={styles.login_input}
                type="password"
                name="password"
                onInput={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" className={styles.input_checkbox} />
              <p className={styles.label_checkbox}>Keep me Signed In</p>
            </div>

            <div className={styles.submit}>
              <input className={styles.login_submit} value="SIGN IN" type="submit" />

              <a href="#" className={styles.login_forgot}>
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
