'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Bubble chart to disable SSR
const Bubble = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Bubble),
  { ssr: false }
);

// Import and register Chart.js components
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: 'Sleep',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 25, y: 10, r: 10 },
          { x: 15, y: 25, r: 20 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Mood',
        data: [
          { x: 20, y: 30, r: 10 },
          { x: 30, y: 20, r: 15 },
          { x: 40, y: 10, r: 25 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: { display: true, text: 'X Value' },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Y Value' },
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubbleChart;
