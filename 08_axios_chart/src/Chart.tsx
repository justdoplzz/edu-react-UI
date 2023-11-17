import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  } | null>(null);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('Data.json');

      const labelArray = [];
      const chartArray = [];

      data.map((item) => {
        labelArray.push(item.first_name);
        chartArray.push(item.english);
      });

      setChartData({
        labels: labelArray,
        datasets: [
          {
            label: 'English',
            data: chartArray,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      });
    })();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'English',
      },
    },
  };

  return (
    <div style={{padding:"50px",width:'800px',margin:'0 auto'}}>
      { chartData && <Bar options={options} data={chartData} /> }
    </div>
  );
}