import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Chart from "chart.js/auto";

Chart.defaults.font.family = "sans-serif";

function Crypto({ data, chartData }) {
  const { name, image, current_price, market_cap, description } = data;

  const chartRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: "line",
        data: chartData,
        options: {
          plugins: {
            legend: {
              labels: {
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
    <div>
      <h1>{name}</h1>
      {current_price && <p>{current_price}</p>}
      <p>Market Cap: {market_cap}</p>
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
      {description && <p>{description.en}</p>}
      <p>Chart:</p>
      <canvas ref={chartRef} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  console.log(data);
  const chartRes = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=14&interval=daily`
  );
  const chartData = await chartRes.json();

  const formattedChartData = {
    labels: chartData.prices ? chartData.prices.map((price) => price[0]) : [],
    datasets: [
      {
        label: "Price",
        data: chartData.prices ? chartData.prices.map((price) => price[1]) : [],
        borderColor: "blue",
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
