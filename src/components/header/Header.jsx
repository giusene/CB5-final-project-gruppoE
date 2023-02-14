import styles from "./styles.module.scss";
import { BiUserCircle } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { navbarLinks } from "@/utils/navbarLinks";

const Header = () => {
  const [currentLabel, setCurrentLabel] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Al cambio di pagina, aggiorna l'etichetta corrente
    const currentPath = router.asPath;
    const currentLink = navbarLinks.filter(
      (link) => link.route === currentPath
    )[0];
    setCurrentLabel(currentLink.label);
  }, [router.asPath]);

  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <p>{currentLabel}</p>
      <i>
        <BiUserCircle />
      </i>
    </div>
  );
};

export default Header;
