import LoginForm from "@/components/loginForm/LoginForm";
import styles from "@/styles/login.module.scss";

const Login = () => {
  return (
    <div className={styles.main}>
      <LoginForm />
    </div>
  );
};

export default Login;
