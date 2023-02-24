import styles from "./styles.module.scss";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import Image from "next/image";
import Calendar from "@/atoms/calendar/Calendar";
import CryptoLogo from "/public/logo/crypto-logo.svg";
import { navbarLinks } from "@/utils/navbarLinks";
import { BiExit } from "react-icons/bi";

const Header = () => {
  const { state, dispatch } = useContext(AppCtx);
  const { name } = state.currentUser;
  const router = useRouter();
  const [path, setPath] = useState("");
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const currentPath = router.asPath;
    setPath(currentPath);
  }, [router.asPath]);

  /* DATE */
  let today = new Date();
  let time = today.getHours();

  const logoutHandler = () => {
    setAnimation(true);
    setTimeout(() => {
      dispatch({
        type: loginActions.LOGOUT_USER,
      });
      router.push("/");
      setAnimation(false);
    }, 900);
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
        <button className={animation ? styles.motion : styles.nothing}>
          <BiExit onClick={logoutHandler} />
        </button>
        {state.currentUser.id <= 5 ? (
          <Image
            src={state.currentUser.pic}
            alt={state.currentUser.name}
            width={100}
            height={100}
          />
        ) : (
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="User"
            width={100}
            height={100}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
