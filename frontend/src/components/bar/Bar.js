import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = ({ data, label }) => (
  <Bar
    data={{
      labels: label,
      datasets: data,
    }}
    options={{
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }}
  />
);

export default BarGraph;
