import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { AppCtx } from "@/store/context";
import Image from "next/image";
import CreditCard from "../creditCard/CreditCard";
import styles from "./styles.module.scss";
import Cart from "../cart/Cart";
import Balance from "../balance/Balance";

const WidgetBar = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const { state } = useContext(AppCtx);

  const { pic, name, surname, username } = state.currentUser;

  useEffect(() => {
    const currentPath = router.asPath;
    setPath(currentPath);
  }, [router.asPath]);

  return (
    <div className={styles.main}>
      <div className={styles.user_data}>
        <Image width={200} height={200} src={pic} alt={name} />
        <div className={styles.user_name}>
          <h3>
            {name} {surname}
          </h3>
          <p>@{username}</p>
        </div>
        <div className={styles.buttons}>
          <button>Follow</button>
        </div>
      </div>
      <div className={styles.container}>
        {path === "/" && <h1>home</h1>}
        {path === "/wallet" && (
          <>
            <h2>Total Earnings</h2>
            <div className={styles.content}>
              <CreditCard />
              <Balance variant={"variant_desktop"} />
            </div>
          </>
        )}
        {path === "/trade" && <Cart />}
        {path === "/nft" && <h1>nft</h1>}
        {path === "/contacts" && <h1>contacts</h1>}
      </div>
    </div>
  );
};

export default WidgetBar;
