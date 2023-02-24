import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinBoxFill } from "react-icons/ri";

function UserCard({ data }) {
  const { name, surname, email, pic, social } = data;
  const mailtoLink = `mailto:${email}`;
  return (
    <div className={styles.card}>
      <Image src={pic} alt={name} width={150} height={150} />
      <div className={styles.namesurname}>
        <span>{name}</span> <span className={styles.name}>{surname}</span>
      </div>
      <div className={styles.data_container}>
        <Link href={mailtoLink}>
          <HiOutlineMail />
        </Link>
        <Link href={social.linkedin}>
          <RiLinkedinBoxFill />
        </Link>
        <Link href={social.github}>
          <IoLogoGithub />
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
