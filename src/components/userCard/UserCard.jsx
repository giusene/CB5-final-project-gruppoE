import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail , AiOutlineLinkedin , AiFillGithub} from "react-icons/ai"; 
function UserCard({ data }) {
  const {name , surname,  email,pic, social} = data ;
  console.log(social.linkedin)
  return (
    <div className={styles.card}>
      
      <Image src={pic} alt={name} width={200} height={200} />
      <h4>
          <span>{name}</span> <span className={styles.name}>{surname}</span>
        </h4>
      <div className={styles.data_container}>
      
        <p><AiOutlineMail/><span>{email}</span></p>
        <p><AiOutlineLinkedin/><a href={social.linkedin}>Linkedin</a></p>
        <p><AiFillGithub/><a href={social.github}>GitHub</a></p>
      </div>
      

      <p></p>
    </div>
  );
}

export default UserCard;
