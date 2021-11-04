import React, { useState } from 'react';
import { Context } from '../../context/Context';
import { Switch, Route } from 'react-router';

import Header from '../header/Header';
import MaxWidth from '../max-width/MaxWidth';

import Charts from '../../pages/charts/Charts';
import LoginForm from '../../pages/loginForm/LoginForm';
import LoginError from '../../pages/loginForm/LoginError';
import MainPage from '../../pages/mainPage/MainPage';
import Account from '../../pages/account/Account';

const Layout = () => {
	const [state, setState] = useState('Products');
	const [chartsData, setChartsData] = useState('');
	const [user, setUser] = useState(localStorage.getItem('user'));
	const [selectedMonth, setSelectedMonth] = useState(() => {
		const thisDate = new Date();
		const thisMonth = thisDate.getMonth();
		const months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen',
			'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];

		return months[thisMonth];
	});

	return (
		<>
			<Header />
			<MaxWidth>
				<Switch>
					<Route path='/login' render={(props) => (<LoginForm setUser={setUser} />)} />
					{user === null ?
						<LoginError /> :
						<Context.Provider value={{
							state, setState,
							chartsData, setChartsData,
							selectedMonth, setSelectedMonth
						}}>
							<Route path='/' exact component={MainPage} />
							<Route path='/account' component={Account} />
							<Route path='/charts' component={Charts} />
						</Context.Provider>
					}
				</Switch>
			</MaxWidth>
		</>
	)
};

export default Layout;
