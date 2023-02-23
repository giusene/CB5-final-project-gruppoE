import { contacts } from "@/store/contacts";
import styles from "@/styles/users.module.scss";
import UserCard from "@/components/userCard/UserCard";
import Loader from "@/components/loader/Loader";
import { useState, useEffect } from "react";

const Contacts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.main}>
      {loading === true && <Loader />}
      {loading === false && (
        <>
          {contacts.map((contact) => (
            <UserCard key={contact.id} data={contact} />
          ))}
        </>
      )}
    </div>
  );
};

export default Contacts;
