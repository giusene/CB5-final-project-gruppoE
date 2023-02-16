import LineChart from "@/components/chart/LineChart";
import styles from "@/components/chart/styles.module.scss";

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
        borderColor: "whitesmoke",
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
      <h1>Il mio Saldo</h1>
      <div className={styles.chart}>
        <LineChart data={data} options={options} />
      </div>
    </div>
  );
}

export default Wallet;
