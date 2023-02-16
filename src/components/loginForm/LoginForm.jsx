import { useState, useContext } from "react";
import styles from "./styles.module.scss";
import { AppCtx } from "@/store/context";
import { actions } from "@/store/actions";

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password,setPassword] =useState('');
  const {SELECT_USER} = actions
  const { state, dispatch} = useContext(AppCtx);

  

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    dispatch({

      type: SELECT_USER,
      payload: {
        username: userName,
        password: password
      },
      
    });
    console.log(state.currentUser)
    
  };

  return (
    <div className={styles.main}>
      <div className={styles.login_container}>
        <form  className={styles.form_login} onSubmit={onSubmitHandler}>
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
              <input className={styles.login_input} type="text" name='username' onInput={(e) => setUserName(e.target.value)}/>
            </div>

            {/* PASSWORD */}
            <div className={styles.password}>
              <p className={styles.login_label}>Password</p>
              <input className={styles.login_input} type="password" name='password' onInput={(e) => setPassword(e.target.value)} />
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" className={styles.input_checkbox} />
              <p className={styles.label_checkbox}> Keep me Signed in</p>
            </div>

            {/* BUTTON */}
            <div className={styles.submit}>
              <input className={styles.login_submit}  value='SIGN IN' type='submit'/>
                
              
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
