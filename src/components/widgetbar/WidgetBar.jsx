import { useRouter } from "next/router";
import { useState,useEffect,useContext } from "react";
import { AppCtx } from "@/store/context";
import Image from "next/image";
import CreditCard from "../creditCard/CreditCard";
import styles from "./styles.module.scss"
const WidgetBar = () => {
  const router = useRouter();
  const [path,setPath] = useState('');
  const {state} = useContext(AppCtx);

  const {pic,name,surname, username} = state.currentUser;
  useEffect(() => {
    const currentPath = router.asPath;
   setPath(currentPath);
  }, [router.asPath]);
  return (
    <div  className={styles.main}>
      <div className={styles.user_data}>
        <Image width={200} height={200} src={pic} alt={name}/>
        <h3>{name} {surname}</h3>
        <p>@{username}</p>
        </div>
      <div className={styles.container}>
          {path === '/' && <h1>home</h1>}
          {path === '/wallet' && <div><CreditCard/><h3>Balance: 100€</h3></div>}
          {path === '/trade' && <h1>trade</h1>}
          {path === '/nft' && <h1>nft</h1>}
          {path === '/contacts' && <h1>contacts</h1>}


      </div>      
    </div>
  );
};

export default WidgetBar;
