import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function LineChart({ data, options }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    const lineDataset = {
      label: "Line Dataset",
      data: [200, 350, 420, 290, 200, 305, 500, 600, 450, 800, 350, 550],
      type: "line",
      fill: false,
      borderColor: "rgba(255, 99, 132, 1)",
      tension: 0.2,
    };

    chartRef.current.data.datasets.push(lineDataset);
    chartRef.current.update();
  }, [data, options]);

  return <canvas ref={canvasRef} />;
}

export default LineChart;
