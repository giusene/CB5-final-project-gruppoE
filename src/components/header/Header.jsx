import styles from "./styles.module.scss";
import { BiUserCircle } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { navbarLinks } from "@/utils/navbarLinks";
import { useContext } from "react";
import { AppCtx } from "@/store/context";

const Header = () => {
  const [currentLabel, setCurrentLabel] = useState("");
  const router = useRouter();
  const {state} = useContext(AppCtx);

  useEffect(() => {
    const currentPath = router.asPath;
    const currentLink = navbarLinks.filter(
      (link) => link.route === currentPath
    )[0];
    setCurrentLabel(currentLink.label);
  }, [router.asPath]);

  return (
    <div className={styles.main}>
      <h1>{currentLabel.toUpperCase()}</h1>
      <div className={styles.auth_data}>
        <i>
          <BiUserCircle />
        </i>
        <h2>{state.currentUser.name}</h2>
      </div>
    </div>
  );
};

export default Header;
