import { useState, useContext } from "react";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import styles from "./styles.module.scss";

function SignupForm() {
  const { state, dispatch } = useContext(AppCtx);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: loginActions.SIGNUP_USER,
      payload: {
        id: 7,
        name: name,
        surname: surname,
        username: username,
        email: email,
        pic: "",
        password: password,
        social: {
          linkedin: "",
          github: "",
        },
        assets: {
          coins: [],
          nft: [],
        },
        cart: [],
        favorite: [],
      },
    });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          className={styles.signup_input}
          type="text"
          name="name"
          onInput={(e) => setName(e.target.value)}
          placeholder="NAME"
          required
        />
        <input
          className={styles.signup_input}
          type="text"
          name="surname"
          onInput={(e) => setSurname(e.target.value)}
          placeholder="SURNAME"
          required
        />
        <input
          className={styles.signup_input}
          type="text"
          name="username"
          onInput={(e) => setUsername(e.target.value)}
          placeholder="USERNAME"
          required
        />
        {state.usernameError && <div>ERROR</div>}
        <input
          className={styles.signup_input}
          type="text"
          name="email"
          onInput={(e) => setEmail(e.target.value)}
          placeholder="EMAIL"
          required
        />
        {state.emailError && <div>ERROR</div>}
        <input
          className={styles.signup_input}
          type="password"
          name="password"
          onInput={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
          required
        />
        {state.pswError && <div>ERROR</div>}
        <div className={styles.btn}>
          <button type="submit">SIGN UP</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
