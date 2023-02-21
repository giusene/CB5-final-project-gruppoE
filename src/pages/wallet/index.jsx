import LineChart from "@/components/chart/LineChart";
import CreditCard from "@/components/creditCard/CreditCard";
import UserCoins from "@/components/userCoins/UserCoins";
import { AppCtx } from "@/store/context";
import { useContext, useEffect, useState } from "react";
import { currencyFormat } from "@/utils/currencyFormat";
import styles from "@/components/chart/styles.module.scss";

function Wallet() {
  const [balance, setBalance] = useState(0);

  const {
    state: { currentUser },
    dispatch,
  } = useContext(AppCtx);

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
        data: [1000, 1200, 1300, 1500, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200],

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

  /* MAP COINS */
  useEffect(() => {
    let total = 0;
    currentUser.assets.coins.map((coin) => {
      const multi = coin.coin.qty * coin.coin.current_price;
      total += multi;
    });
    setBalance(total);
  }, []);

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
          <UserCoins />
        </div>
      </div>

      <div className={styles.right_container}>
        <CreditCard />
        <div className={styles.balance}>
          <h2>Balance:</h2>
          <p>{currencyFormat(balance)}</p>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
