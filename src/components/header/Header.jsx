import styles from "./styles.module.scss";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import Image from "next/image";
import Calendar from "@/atoms/calendar/Calendar";
import CryptoLogo from "/public/logo/crypto-logo.svg";
import { navbarLinks } from "@/utils/navbarLinks";

const Header = () => {
  const { state, dispatch } = useContext(AppCtx);
  const { name } = state.currentUser;
  const router = useRouter();
  const [path, setPath] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const currentPath = router.asPath;
    setPath(currentPath);
  }, [router.asPath]);

  /* DATE */
  let today = new Date();
  let time = today.getHours();

  const logoutHandler = () => {
    dispatch({
      type: loginActions.LOGOUT_USER,
    });
    router.push("/");
  };

  const menuHandle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.main}>
      <div className={styles.name_date}>
        <h2>
          {time < 12 ? "Good morning" : "Good evening"}, {name}
        </h2>
        <Calendar />
      </div>
      {/* LOGO HEADER MOBILE */}
      <div className={styles.logo}>
        <Image src={CryptoLogo} alt="logo" width={45} height={45} />
      </div>
      {/* PAGE NAME MOBILE */}

      {navbarLinks.map(
        (link) =>
          link.route === path && (
            <div key={link.id} className={styles.page_label}>
              <h1> {link.label} </h1>
            </div>
          )
      )}

      {/* USER DATA */}
      <div className={styles.auth_data}>
        <Image
          src={state.currentUser.pic}
          alt={state.currentUser.name}
          width={100}
          heigh={100}
          onClick={() => menuHandle()}
        />
      </div>
      {openMenu && (
        <div className={styles.menu_mobile}>
          <ul>
            <li onClick={logoutHandler}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
