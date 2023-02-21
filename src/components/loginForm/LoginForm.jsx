import styles from "./styles.module.scss";
import { useState, useContext } from "react";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import SignupForm from "../signupForm/SignupForm";

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

  return (
    <div className={styles.main}>
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
        {state.loginError && <div>ERROR</div>}
        <div className={styles.btn}>
          <button type="submit">SIGN IN</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
