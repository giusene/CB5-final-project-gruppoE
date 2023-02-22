import styles from "./styles.module.scss";
import { navbarLinks } from "@/utils/navbarLinks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState(router.asPath);

  useEffect(() => {
    setActiveId(router.asPath);
  }, [router.asPath]);

  return (
    <div className={styles.main}>
      {navbarLinks.map((link) => (
        <Link
          key={link.id}
          href={link.route}
          onClick={() => setActiveId(link.id)}
          className={
            activeId === link.route
              ? `${styles.link} ${link.id === 3 ? styles.icon_big : ""} ${
                  styles.icon_active
                }`
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
