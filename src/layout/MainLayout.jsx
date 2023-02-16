import styles from "./styles.module.scss";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Login from "@/pages/login";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Login>
        <Header />
        <Navbar />
        {children}
      </Login>
    </div>
  );
};

export default MainLayout;
