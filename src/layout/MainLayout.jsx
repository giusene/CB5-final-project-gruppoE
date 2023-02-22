import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import WidgetBar from "@/components/widgetbar/WidgetBar";
import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.hero}>
        <Header />
        {children}
      </div>
      <div className={styles.widgetbar}>
        <WidgetBar />
      </div>
    </div>
  );
};
export default MainLayout;
