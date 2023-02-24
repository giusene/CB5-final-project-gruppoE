import AuthCard from "@/components/authCard/AuthCard";
import styles from "@/styles/login.module.scss";
import Image from "next/image";
import CryptoLogo from "../../../public/logo/crypto-logo.svg";
const Login = () => {
  return (
    <div className={styles.main}>
      <Image src={CryptoLogo} alt="logo" width={60} height={60} />
      <AuthCard />
    </div>
  );
};

export default Login;
