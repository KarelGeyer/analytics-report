import React, { useState } from 'react';
import { Context, UserContext } from '../../context/Context';
import { Switch, Route } from 'react-router';

import Header from '../header/Header';
import MaxWidth from '../max-width/MaxWidth';

import Charts from '../../pages/charts/Charts';
import LoginForm from '../../pages/loginForm/LoginForm';
import LoginError from '../../pages/loginForm/LoginError';
import MainPage from '../../pages/mainPage/MainPage';

const Layout = () => {
	const [state, setState] = useState('Products');
	const [chartsData, setChartsData] = useState('');
	const [user, setUser] = useState('');
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
					<UserContext.Provider value={{ user, setUser }}>
						<Route path='/' exact component={MainPage} />
						<Route path='/login' component={LoginForm} />
						{user === null ?
							<LoginError user={user} /> :
							<Context.Provider value={{
								state, setState,
								chartsData, setChartsData,
								selectedMonth, setSelectedMonth
							}}>
								<Route path='/charts' component={Charts} />
							</Context.Provider>
						}
					</UserContext.Provider>
				</Switch>
			</MaxWidth>
		</>
	)
};

export default Layout;
