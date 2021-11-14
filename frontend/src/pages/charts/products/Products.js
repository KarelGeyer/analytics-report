import React, { useContext } from 'react';
import { Context } from '../../../helpers/context/Context';

import GraphWrapper from '../../../components/graphWrapper/GraphWrapper';
import BarGraph from '../../../components/bar/Bar';
import { BarWrapper } from '../styles';

const Products = () => {
  const { chartsData, selectedMonth } = useContext(Context);

  const heading = `Producty v měsíci ${{ selectedMonth }}`;

  const filterDataByMonth = chartsData.filter(item => item.monthCz === selectedMonth);
  const data = filterDataByMonth[0];

  const dataset1 = data && [
    {
      label: 'Produkty podle tržeb',
      data: data && data.productsByValue.values,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2
    }
  ];

  const dataset2 = data && [
    {
      label: 'Produkty podle kusů',
      data: data && data.productsByQuantity.values,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2
    }
  ];

  return (
    <>
      {data &&
        <GraphWrapper heading={heading}>
          <BarWrapper>
            <BarGraph
              data={dataset1}
              label={data.categoriesByValue.names}
            />
          </BarWrapper>
          <BarWrapper>
            <BarGraph
              data={dataset2}
              label={data.categoriesByQuantity.names}
            />
          </BarWrapper>
        </GraphWrapper>
      }
    </>
  )
};

export default Products;
