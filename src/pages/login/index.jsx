import AuthCard from "@/components/authCard/AuthCard";
import styles from "@/styles/login.module.scss";
import Image from "next/image";
import CryptoLogoAnim from "../../../public/logo/crypto-logo-anim.svg";
const Login = () => {
  return (
    <div className={styles.main}>
      <Image src={CryptoLogoAnim} alt="logo" width={60} height={60} />
      <AuthCard />
    </div>
  );
};

export default Login;
