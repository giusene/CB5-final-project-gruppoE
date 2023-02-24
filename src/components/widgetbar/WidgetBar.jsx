import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { AppCtx } from "@/store/context";
import { loginActions } from "@/store/actions";
import Image from "next/image";
import CreditCard from "../creditCard/CreditCard";
import styles from "./styles.module.scss";
import Balance from "../balance/Balance";
import CartDesktop from "../cartDesktop/CartDesktop";

const WidgetBar = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const { state, dispatch } = useContext(AppCtx);

  const { pic, name, surname, username } = state.currentUser;

  useEffect(() => {
    const currentPath = router.asPath;
    setPath(currentPath);
  }, [router.asPath]);

  const logoutHandler = () => {
    dispatch({
      type: loginActions.LOGOUT_USER,
    });
    router.push("/");
  };

  return (
    <div className={styles.main}>
      <div className={styles.user_data}>
        <Image src={pic} alt={name} width={500} height={500} />
        <div className={styles.user_name}>
          <h3>
            {name} {surname}
          </h3>
          <p>@{username}</p>
        </div>
        {state.isLogged && <button onClick={logoutHandler}>LOGOUT</button>}
      </div>
      <div className={styles.container}>
        {path === "/" && (
          <>
            <h2>Welcome back</h2>
            <h3>{name}!</h3>
          </>
        )}
        {path === "/wallet" && (
          <>
            <h2>Total Earnings</h2>
            <div className={styles.content}>
              <CreditCard />
              <Balance variant={"variant_desktop"} />
            </div>
          </>
        )}
        {path === "/trade" && <CartDesktop />}
      </div>
    </div>
  );
};

export default WidgetBar;
