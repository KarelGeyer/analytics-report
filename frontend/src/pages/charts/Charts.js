import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/Context';
import { Switch, Route } from 'react-router';
import axios from 'axios';

import { STATIC_DATA } from '../../assets/static_data/StaticData';

import SectionPicker from '../../components/sectionPicker/SectionPicker';
import Products from './products/Products';
import Categories from './categories/Categories';
import Customers from './customers/Customers';
import Channels from './channels/Channels';
import Data from './data/Data';
import { MainSection } from './styles';

const Charts = () => {
	const { state, chartsData, setChartsData } = useContext(Context);

	useEffect(() => {
		axios.get(STATIC_DATA.URL.fetchData)
			.then((res) => {
				setChartsData(res.data[1].mock);
			})
			.catch(err => { })
	}, [setChartsData]);

	return (
		<>
			<MainSection>
				<SectionPicker state={state} />
				<Switch>
					{chartsData &&
						<>
							<Route path='/charts/Products' component={Products} />
							<Route path='/charts/Categories' component={Categories} />
							<Route path='/charts/Customers' component={Customers} />
							<Route path='/charts/Channels' component={Channels} />
							<Route path='/charts/Data' component={Data} />
						</>
					}
				</Switch>
			</MainSection>
		</>
	)
};

export default Charts;
