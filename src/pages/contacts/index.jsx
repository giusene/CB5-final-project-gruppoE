import styles from "@/styles/users.module.scss";
import UserCard from "@/components/userCard/UserCard";
import Loader from "@/components/loader/Loader";
import { useState, useEffect, useContext } from "react";
import { AppCtx } from "@/store/context";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const { state } = useContext(AppCtx);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.main}>
      {loading === true && <Loader />}
      {loading === false && (
        <>
          {state.users.slice(0, 5).map((contact) => (
            <UserCard key={contact.id} data={contact} />
          ))}
        </>
      )}

      <div className={styles.copyright}>
        <p>Copyright © 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contacts;
