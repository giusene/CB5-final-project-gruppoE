import { contacts } from "@/store/contacts";
import styles from "@/styles/users.module.scss";
import UserCard from "@/components/userCard/UserCard";

const Contacts = () => {
  return (
    <div className={styles.main}>
      {contacts.map((contact) => (
        <UserCard key={contact.id} data={contact} />
      ))}
    </div>
  );
};

export default Contacts;
