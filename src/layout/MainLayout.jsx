import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <Navbar />
      {children} */
    </div>
  );
};
export default MainLayout;
