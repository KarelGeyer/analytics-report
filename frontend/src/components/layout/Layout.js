import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import MaxWidth from "../max-width/MaxWidth"
import SectionPicker from '../sectionPicker/SectionPicker'
import Charts from '../../pages/charts/Charts'
import LoginForm from '../../pages/loginForm/LoginForm'
import { Switch, Route } from 'react-router';
import { Context } from '../../context/Context'
import LocationReload from '../../pages/loginForm/LocationReload'

const Layout = () => {
	const [state, setState] = useState("Products")
	const [chartsData, setChartsData] = useState()
	const [selectedMonth, setSelectedMonth] = useState(() => {
		const thisDate = new Date()
		const thisMonth = thisDate.getMonth()
		const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
			"Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]

		return months[thisMonth]
	}
	)
	const [user, setUser] = useState(null)

	useEffect(() => {
		const thisUser = JSON.parse(localStorage.getItem('user'))
		setUser(thisUser)
	}, [])

	return (
		<>
			<Header />
			<MaxWidth>
				<Switch>
					<Route path="/login" component={LoginForm} />
					<Context.Provider value={
						{
							state, setState,
							chartsData, setChartsData,
							user, setUser,
							selectedMonth, setSelectedMonth
						}
					}>
						{user === null ?
							<LocationReload />
							: <>
								<SectionPicker state={state} />
								<Route path="/charts" component={Charts} />
							</>
						}
					</Context.Provider>
				</Switch>
			</MaxWidth>
		</>
	)
}

export default Layout
