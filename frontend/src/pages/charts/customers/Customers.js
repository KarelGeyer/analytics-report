import React, { useContext } from 'react'
import { Context } from '../../../context/Context'
import { MainWrapper, Heading, GraphWrapper, PieWrapper } from "./styles"
import { Pie } from 'react-chartjs-2'


const Customers = () => {
	const { chartsData, selectedMonth } = useContext(Context)
	const filterDataByMonth = chartsData.filter(item => item.monthCz === selectedMonth)
	const data = filterDataByMonth[0]

	return (
		<>
			{data ?
				<MainWrapper>
					<Heading> Zákazníci v měsíci {selectedMonth} </Heading>
					<GraphWrapper>
						<PieWrapper>
							<Pie
								data={{
									labels: data.customersData.age[0].categories,
									datasets: [{
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
									labels: data.customersData.sex[0].categories,
									datasets: [{
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
								}}
								options={{
									scales: {
										y: {
											beginAtZero: false
										}
									}
								}}
							/>
						</PieWrapper>
						<PieWrapper>
							<Pie
								data={{
									labels: data.customersData.device[0].categories,
									datasets: [{
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
				:
				<MainWrapper>
					<Heading>Měsíc {selectedMonth} zatím nebyl vyhodnocen</Heading>
				</MainWrapper>
			}
		</>
	)
}

export default Customers
