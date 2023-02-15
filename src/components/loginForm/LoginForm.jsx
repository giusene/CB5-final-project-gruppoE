import styles from "./styles.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.main}>
      <div className={styles.login_container}>
        <form action="" className={styles.form_login}>
          <ul className={styles.login_nav}>
            <li className={`${styles.login_nav__item} ${styles.active}`}>
              <a href="#">Sign In</a>
            </li>
            <li className={styles.login_nav__item}>
              <a href="#">Sign Up</a>
            </li>
          </ul>

          <div className={styles.wrapper}>
            {/* USERNAME */}
            <div className={styles.username}>
              <p className={styles.login_label}>Username</p>
              <input className={styles.login_input} type="text" />
            </div>

            {/* PASSWORD */}
            <div className={styles.password}>
              <p className={styles.login_label}>Password</p>
              <input className={styles.login_input} type="password" />
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" className={styles.input_checkbox} />
              <p className={styles.label_checkbox}> Keep me Signed in</p>
            </div>

            {/* BUTTON */}
            <div className={styles.submit}>
              <button className={styles.login_submit} disabled>
                Sign in
              </button>
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
