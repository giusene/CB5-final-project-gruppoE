import LineChart from "@/components/chart/LineChart";
import styles from "@/components/chart/styles.module.scss";
import CreditCard from "@/components/creditCard/CreditCard";

function Wallet() {
  const data = {
    labels: [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre",
    ],
    datasets: [
      {
        label: "Saldo",
        data: [
          1000, 1200, 1300, 1500, 1800, 2000, 2200, 2400, 2600, 2800, 3000,
          3200,
        ],


        borderColor: "purple",

        fill: false,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: false,
        text: "Stacked Line/Bar Chart",
      },
    },

    scales: {
      y: {
        ticks: {
          stacke: true,
        },
      },
    },
  };

  return (
    <div className={styles.main}>
      <div className={styles.left_container}>
        <div>
          <h2>Chart</h2>
          <div className={styles.chart}>
            <LineChart data={data} options={options} />
          </div>
        </div>

        <div className={styles.coins}>
          <h2>Your coins</h2>
        </div>
      </div>

      <div className={styles.right_container}>
        <CreditCard />
        <div className={styles.balance}>
          <h2>Balance:</h2>
          <h3>0,00000000</h3>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
