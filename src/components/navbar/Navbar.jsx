import styles from "./styles.module.scss";
import { navbarLinks } from "@/utils/navbarLinks";
import Link from "next/link";

import { useState } from "react";

const Navbar = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className={styles.main}>
      {navbarLinks.map((link) => (
        <Link key={link.id} href={link.route}>
          <i
            onClick={() => setActiveId(link.id)}
            className={
              activeId === link.id
                ? `${styles.icon} ${link.id === 3 ? styles.icon_big : ""} ${styles.icon_active}`
                : `${styles.icon} ${link.id === 3 ? styles.icon_big : ""}`
            }
          >
            {link.icon}
          </i>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
