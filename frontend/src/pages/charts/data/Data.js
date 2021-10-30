import React, { useContext } from 'react'
import { Context } from '../../../context/Context'
import { MainWrapper, GraphWrapper, BarWrapper, PieWrapper, Heading } from './styles'
import { Bar, Pie } from 'react-chartjs-2'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Data = () => {
	const { chartsData, selectedMonth } = useContext(Context)
	const date = new Date()
	const year = date.getUTCFullYear()
	const thisMonthAndYear = `${selectedMonth}, ${year}`
	const lastYearDate = `${selectedMonth}, ${year - 1}`
	const head = ['Konverzní poměr', 'Noví uživatelé', 'Tržby', 'Transakce', 'Uživatelé', 'Návštěvy']

	const filterDataByMonth = chartsData.filter(item => item.monthCz === selectedMonth)
	const data = filterDataByMonth[0]

	let currentYearData = ""
	let lastYearData = ""

	if (data) {
		currentYearData = Object.values(data.dataComparison.currentYearData);
		lastYearData = Object.values(data.dataComparison.lastYearData);
	}

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
								i === 3 ?
									<th key={i}> {res}% </th>
									: <th key={i}> {res} </th>
							)}
						</tr>
						<tr>
							<th> {lastYearDate} </th>
							{lastYearData.map((res, i) =>
								i === 3 ?
									<th key={i}> {res}% </th>
									: <th key={i}> {res} </th>
							)}
						</tr>
					</tbody>
				</Table>

				<GraphWrapper>
					<BarWrapper>
						<Bar
							data={{
								labels: head.slice(0, 3),
								datasets: [{
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
							}}
							options={{
								scales: {
									y: {
										beginAtZero: true
									}
								}
							}}
						/>
					</BarWrapper>
					<PieWrapper>
						<Pie
							data={{
								labels: [thisMonthAndYear, lastYearDate],
								datasets: [{
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
							}}
							options={{
								scales: {
									y: {
										beginAtZero: true
									}
								}
							}}
						/>
					</PieWrapper>
					<PieWrapper>
						<Pie
							data={{
								labels: [thisMonthAndYear, lastYearDate],
								datasets: [{
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
								},]
							}}
							options={{
								scales: {
									y: {
										beginAtZero: true
									}
								}
							}}
						/>
					</PieWrapper>
				</GraphWrapper>
			</MainWrapper>
		</>
	)
}

export default Data
