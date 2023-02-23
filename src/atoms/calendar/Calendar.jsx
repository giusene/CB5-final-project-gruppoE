import styles from "./styles.module.scss";

const Calendar = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const current = new Date();
  const date = `${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;

  return (
    <div className={styles.Calendar}>
      <h4>{date}</h4>
    </div>
  );
};

export default Calendar;
