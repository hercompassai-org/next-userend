'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Bar = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Bar),
  { ssr: false }
);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ predictionData }) => {


  if (!predictionData) return <p>Loading...</p>;

  const symptoms = predictionData?.symptoms || [];
  const menopausePercent = predictionData?.percent_menopause || 0;
  const normalPercent = predictionData?.percent_normal || 0;

  const labels = symptoms.length ? symptoms : ["Symptom 1", "Symptom 2"];

  const data = {
    labels,
    datasets: [
      {
        label: 'Menopause %',
        data: labels.map(() => menopausePercent),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Normal %',
        data: labels.map(() => normalPercent),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '' }
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
