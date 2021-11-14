import React, { useContext } from 'react';
import { Context } from '../../../helpers/context/Context';

import GraphWrapper from '../../../components/graphWrapper/GraphWrapper';
import BarGraph from '../../../components/bar/Bar';
import { BarWrapper } from '../styles';

const Channels = () => {
	const { chartsData, selectedMonth } = useContext(Context);

	const heading = 'Marketingové kanály v měsíci';

	const filterDataByMonth = chartsData.filter(item => item.monthCz === selectedMonth);
	const data = filterDataByMonth[0];

	let transactionsArray = '';
	let salesArray = '';
	let salesArrayFormatted = '';

	if (data) {
		transactionsArray = Object.values(data.marketingChannels.transactions)
		salesArray = Object.values(data.marketingChannels.sales)
		salesArrayFormatted = salesArray.map(item => item / 1000)
	};

	const datasets = [
		{
			label: 'Transakce',
			data: transactionsArray,
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
		},
		{
			label: 'Tržby v tisících',
			data: salesArrayFormatted,
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
		},
	];

	const label = ['Direct', 'Organic', 'PPC', 'referral', 'Social Media'];

	return (
		<>
			{data &&
				<GraphWrapper heading={heading} month={selectedMonth}>
					<BarWrapper>
						<BarGraph
							data={datasets}
							label={label}
						/>
					</BarWrapper>
				</GraphWrapper>
			}

		</>
	)
};

export default Channels;
