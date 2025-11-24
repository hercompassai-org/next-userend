'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Bubble = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Bubble),
  { ssr: false }
);

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

const BubbleChart = ({ data }) => {
  

  const bubblePoints = data?.predictions
    ?.filter(p => p.feature_vector?.avg_sleep && p.feature_vector?.avg_mood)
    ?.map(p => ({
      x: p.feature_vector.avg_sleep, 
      y: p.feature_vector.avg_mood,
      r: Math.abs(
        p.predicted_symptoms?.hot_flashes ??
        p.predicted_symptoms?.mood_drop_risk ??
        10
      ) * 10,
    })) || [

      { x: 10, y: 20, r: 15 },
      { x: 25, y: 10, r: 10 },
      { x: 15, y: 25, r: 20 },
    ];

  const chartData = {
    datasets: [
      {
        label: 'Sleep vs Mood',
        data: bubblePoints,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '' },
    },
    scales: {
      x: { beginAtZero: true, title: { display: true, text: 'Sleep (hrs)' } },
      y: { beginAtZero: true, title: { display: true, text: 'Mood Level' } },
    },
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Bubble data={chartData} options={options} />
    </div>
  );
};

export default BubbleChart;
