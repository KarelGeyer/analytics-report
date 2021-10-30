import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/Context';
import { MainSection } from "./styles";
import Products from './products/Products';
import Categories from './categories/Categories';
import Customers from './customers/Customers';
import { Switch, Route } from 'react-router';
import Channels from './channels/Channels';
import Data from "./data/Data";
import { STATIC_DATA } from '../../assets/static_data/StaticData';
import axios from "axios";

const Charts = ({ location }) => {
	const { chartsData, setChartsData } = useContext(Context)

	useEffect(() => {
		axios.get(STATIC_DATA.URL.fetchData)
			.then((res) => {
				setChartsData(res.data[1].mock)
			})
			.catch(err => {
				console.log(err)
			})
	}, [setChartsData])

	return (
		<>
			<MainSection>
				<Switch>
					{chartsData &&
						<>
							<Route path="/charts/Products" component={Products} />
							<Route path="/charts/Categories" exact component={Categories} />
							<Route path="/charts/Customers" exact component={Customers} />
							<Route path="/charts/Channels" exact component={Channels} />
							<Route path="/charts/Data" exact component={Data} />
						</>
					}
				</Switch>
			</MainSection>
		</>
	)
}

export default Charts
