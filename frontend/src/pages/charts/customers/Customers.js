import React, { useContext } from 'react';
import { Context } from '../../../context/Context';
import GraphWrapper from '../../../components/graphWrapper/GraphWrapper';
import { PieWrapper } from '../styles';
import PieGraph from '../../../components/pie/Pie';

const Customers = () => {
	const { chartsData, selectedMonth } = useContext(Context);

	const heading = `Zákazníci v měsíci ${{ selectedMonth }}`;

	const filterDataByMonth = chartsData.filter(item => item.monthCz === selectedMonth);
	const data = filterDataByMonth[0];

	const datasets = [
		{
			label: data.customersData.age[0].categories,
			set: [{
				label: 'Customers by Age',
				data: data.customersData.age[0].values,
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
			}]
		},
		{
			label: data.customersData.sex[0].categories,
			set: [{
				label: 'Customers by Sex',
				data: data.customersData.sex[0].values,
				backgroundColor: [
					'rgba(255, 99, 132, 0.5)',
					'rgba(54, 162, 235, 0.5)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
				],
				borderWidth: 3
			}]
		},
		{
			label: data.customersData.device[0].categories,
			set: [{
				label: 'Customers by Device',
				data: data.customersData.device[0].values,
				backgroundColor: [
					'rgba(255, 99, 132, 0.5)',
					'rgba(54, 162, 235, 0.5)',
					'rgba(255, 206, 86, 0.5)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
				],
				borderWidth: 2
			}]
		},
	];

	return (
		<>
			{data &&
				<GraphWrapper heading={heading}>
					{datasets.map(dataset =>
						<PieWrapper>
							<PieGraph
								data={dataset.set}
								label={dataset.label}
							/>
						</PieWrapper>
					)}
				</GraphWrapper>
			}
		</>
	)
};

export default Customers;
