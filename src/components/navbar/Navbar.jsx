import styles from "./styles.module.scss";
import { navbarLinks } from "@/utils/navbarLinks";
import Link from "next/link";

import { useState } from "react";

const Navbar = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className={styles.main}>
      {navbarLinks.map((link) => (
        <Link
          key={link.id}
          href={link.route}
          onClick={() => setActiveId(link.id)}
          className={
            activeId === link.id
              ? `${styles.link} ${link.id === 3 ? styles.icon_big : ""} ${styles.icon_active}`
              : `${styles.link} ${link.id === 3 ? styles.icon_big : ""}`
          }
        >
          <i className={styles.icon}>{link.icon}</i>
          <p className={styles.nav_label}>{link.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
