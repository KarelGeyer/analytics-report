import React, { useEffect, useContext } from 'react';
import { Context } from '../../helpers/context/Context';
import { Switch, Route } from 'react-router';
import axios from 'axios';

import { STATIC_DATA } from '../../assets/static_data/StaticData';

import SectionPicker from '../../components/sectionPicker/SectionPicker';
import Products from './products/Products';
import Categories from './categories/Categories';
import Customers from './customers/Customers';
import Channels from './channels/Channels';
import Data from './data/Data';
import AddData from './addData/AddData';

const Charts = () => {
	const { state, chartsData, setChartsData } = useContext(Context);

	useEffect(() => {
		axios.get(STATIC_DATA.URL.FETCH_DATA)
			.then((res) => {
				setChartsData(res.data[1].mock);
			})
			.catch(() => { })
	}, [setChartsData]);

	return (
		<>
			<SectionPicker state={state} />
			<Switch>
				{chartsData &&
					<>
						<Route path='/charts/products' component={Products} />
						<Route path='/charts/categories' component={Categories} />
						<Route path='/charts/customers' component={Customers} />
						<Route path='/charts/channels' component={Channels} />
						<Route path='/charts/data' component={Data} />
						<Route path='/charts/add-data' component={AddData} />
					</>
				}
			</Switch>
		</>
	)
};

export default Charts;
