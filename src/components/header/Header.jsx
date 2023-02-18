import styles from "./styles.module.scss";
import { BiUserCircle } from "react-icons/bi";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { navbarLinks } from "@/utils/navbarLinks";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";

const Header = () => {
  const { state, dispatch } = useContext(AppCtx);
  const [currentLabel, setCurrentLabel] = useState("");
  const router = useRouter();

  const logoutHandler = () => {
    dispatch({
      type: loginActions.LOGOUT_USER,
    });
  };

  useEffect(() => {
    const currentPath = router.asPath;
    const currentLink = navbarLinks.filter(
      (link) => link.route === currentPath
    )[0];
    setCurrentLabel(currentLink.label);
  }, [router.asPath]);

  return (
    <div className={styles.main}>
      <h2>{currentLabel.toUpperCase()}</h2>
      <div className={styles.auth_data}>
        {state.isLogged && <button onClick={logoutHandler}>Logout</button>}
        <div className={styles.right_header}>
          <i>
            <BiUserCircle />
          </i>
          <h3>{state.currentUser.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
