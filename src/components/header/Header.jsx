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
    const currentLink = navbarLinks.find((link) => link.route === currentPath);
    if (currentLink) {
      setCurrentLabel(currentLink.label);
    }
  }, [router.asPath]);

  return (
    <div className={styles.main}>
      <h1>{currentLabel.toUpperCase()}</h1>

      <div className={styles.auth_data}>
        {state.isLogged && <button onClick={logoutHandler}>LOGOUT</button>}
        <img src={state.currentUser.pic} alt={state.currentUser.name} />
      </div>
    </div>
  );
};

export default Header;
