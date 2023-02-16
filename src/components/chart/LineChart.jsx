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
      type: "line",
      data,
      options,
    });
  }, [data, options]);

  return <canvas ref={canvasRef} />;
}

export default LineChart;
