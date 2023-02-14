import styles from "./styles.module.scss";
import { navbarLinks } from "@/utils/navbarLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.main}>
      {navbarLinks.map((link) => (
        <Link key={link.id} href={link.route}>
          <div className={styles.link}>
            <i>{link.icon}</i>
            {/* <p>{link.label}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
