import styles from "./styles.module.scss";
import { navbarLinks } from "@/utils/navbarLinks";
import Link from "next/link";
import Image from "next/image";
import CryptoLogo from "/public/logo/crypto-logo.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HelpCenter from "../helpCenter/HelpCenter";

const Navbar = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState(router.asPath);

  useEffect(() => {
    setActiveId(router.asPath);
  }, [router.asPath]);

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image
          src={"/logo/crypto-logotype.svg"}
          alt="logo"
          width={300}
          height={300}
        />
      </div>

      <div className={styles.nav_links}>
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

        <div className={styles.help_center}>
          <HelpCenter variant={"variant_desktop"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
