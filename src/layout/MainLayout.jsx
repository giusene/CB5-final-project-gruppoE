import styles from "./styles.module.scss";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
