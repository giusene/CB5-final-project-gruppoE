import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Chart from "chart.js/auto";
import styles from "../../styles/crypto.module.scss";

Chart.defaults.font.family = "montserrat";

function Crypto({ data, chartData }) {
  const { name, image, current_price, description, symbol } = data;

  const chartRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: {
          scales: {
            y: {
              ticks: {
                color: "white",
                stacke: true,
              },
            },
            x: {
              ticks: {
                color: "white",
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "white",
                usePointStyle: true,
              },
            },
          },
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [chartData]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.crypto_container}>
        {image && (
          <Image
            src={image.large}
            alt={name}
            width={100}
            height={100}
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}
        <div className={styles.crypto_name}>
          <h1>{name}</h1>
          {current_price && <p>{current_price}</p>}
          <p>{symbol.toUpperCase()}</p>
        </div>
      </div>
      <canvas ref={chartRef} />
      {description && <p className={styles.description}>{description.en}</p>}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  const chartRes = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=6&interval=daily`
  );
  const chartData = await chartRes.json();

  const formattedChartData = {
    labels: chartData.prices ? chartData.prices.map((price) => price[0]) : [],
    datasets: [
      {
        label: "Price",
        data: chartData.prices ? chartData.prices.map((price) => price[1]) : [],
        borderColor: "#b375ef",
      },
    ],
  };

  return {
    props: {
      data,
      chartData: formattedChartData,
    },
  };
}

export default Crypto;
