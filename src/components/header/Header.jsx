import styles from "./styles.module.scss";
import { useContext } from "react";
import { useRouter } from "next/router";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import Image from "next/image";
import Calendar from "@/atoms/calendar/Calendar";

const Header = () => {
  const { state, dispatch } = useContext(AppCtx);

  const { name } = state.currentUser;
  const router = useRouter();

  /* DATE */
  let today = new Date();
  let time = today.getHours();

  const logoutHandler = () => {
    dispatch({
      type: loginActions.LOGOUT_USER,
    });
    router.push("/");
  };

  return (
    <div className={styles.main}>
      <div className={styles.name_date}>
        <h2>
          {time < 12 ? "Good morning" : "Good evening"}, {name}
        </h2>

        <Calendar />
      </div>

      <div className={styles.auth_data}>
        {state.isLogged && <button onClick={logoutHandler}>LOGOUT</button>}
        {/* <Image src={state.currentUser.pic} alt={state.currentUser.name} /> */}
      </div>
    </div>
  );
};

export default Header;
