import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieGraph = ({ data, label }) => (
  <Pie
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

export default PieGraph;
