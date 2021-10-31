import React, { useContext } from 'react';
import { Context } from '../../../context/Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

import GraphWrapper from '../../../components/graphWrapper/GraphWrapper';
import PieGraph from '../../../components/pie/Pie';
import BarGraph from '../../../components/bar/Bar';
import { MainWrapper, BarWrapper, PieWrapper, Heading } from '../styles';

const Data = () => {
	const { chartsData, selectedMonth } = useContext(Context);
	const date = new Date();
	const year = date.getUTCFullYear();
	const thisMonthAndYear = `${selectedMonth}, ${year}`;
	const lastYearDate = `${selectedMonth}, ${year - 1}`;
	const head = ['Konverzní poměr', 'Noví uživatelé', 'Tržby', 'Transakce', 'Uživatelé', 'Návštěvy'];

	const filterDataByMonth = chartsData.filter(item => item.monthCz === selectedMonth);
	const data = filterDataByMonth[0];

	let currentYearData = '';
	let lastYearData = '';

	if (data) {
		currentYearData = Object.values(data.dataComparison.currentYearData);
		lastYearData = Object.values(data.dataComparison.lastYearData);
	};

	const datasets = [
		{
			isPie: false,
			label: head.slice(0, 3),
			set: [{
				label: thisMonthAndYear,
				data: currentYearData.slice(0, 3),
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
			},
			{
				label: lastYearDate,
				data: lastYearData.slice(0, 3),
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
		{
			isPie: true,
			label: [thisMonthAndYear, lastYearDate],
			set: [{
				label: thisMonthAndYear, lastYearDate,
				data: [currentYearData[5], lastYearData[5]],
				backgroundColor: [
					'rgba(255, 99, 132, 0.5)',
					'rgba(203, 50, 255, 0.5)',
				],
				borderColor: [
					'rgba(255, 206, 86, 0.5)',
					'rgba(54, 162, 235, 1)',
				],
				borderWidth: 2
			},]
		},
		{
			isPie: true,
			label: data.customersData.device[0].categories,
			set: [{
				label: thisMonthAndYear, lastYearDate,
				data: [currentYearData[4], lastYearData[4]],
				backgroundColor: [
					'rgba(54, 162, 235, 0.5)',
					'rgba(255, 206, 86, 0.5)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
				],
				borderWidth: 2
			}]
		},
	];

	return (
		<>
			<MainWrapper>
				<Heading> Data v měsíci {selectedMonth} </Heading>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th> Year </th>
							{head.map((res, i) =>
								<th key={i}> {res} </th>
							)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<th> {thisMonthAndYear} </th>
							{currentYearData.map((res, i) =>
								i === 3 ? <th key={i}> {res}% </th> : <th key={i}> {res} </th>
							)}
						</tr>
						<tr>
							<th> {lastYearDate} </th>
							{lastYearData.map((res, i) =>
								i === 3 ? <th key={i}> {res}% </th> : <th key={i}> {res} </th>
							)}
						</tr>
					</tbody>
				</Table>

				<GraphWrapper>
					{datasets.map(dataset =>
						dataset.isPie ?
							<PieWrapper>
								<PieGraph
									data={dataset.set}
									label={dataset.label}
								/>
							</PieWrapper>
							:
							<BarWrapper>
								<BarGraph
									data={dataset.set}
									label={dataset.label}
								/>
							</BarWrapper>
					)}
				</GraphWrapper>
			</MainWrapper>
		</>
	)
};

export default Data;
