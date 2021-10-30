import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { STATIC_DATA } from '../../assets/static_data/StaticData';
import { MainWrapper, InputWrapper, AccountWrapper, AccountButton, Input, Heading, Wrapper, LinkText } from "./styles"
import styled from "styled-components";

// Button is kept here for dynamic border and background color
const Button = styled.button`
    height: 30px;
    width: 20%;
    border: 1px solid ${props => props.theme.color.primary};
    border-radius: 1px;
    background-color: ${props => props.theme.color.bttn};
    color: #FFF;
    font-weight: 600;
    :focus {
        background-color: #000000
    };
    :hover {
        background-color: #000000
    }   
`

const SectionPicker = () => {
	const buttons = ["Products", "Categories", "Data", "Customers", "MKT kanály"]
	const loginUrl = STATIC_DATA.URL.loginPage
	const monthRef = useRef()
	const { setSelectedMonth } = useContext(Context)

	// Get Date
	const thisDate = new Date()
	const thisMonth = thisDate.getMonth() + 1
	const thisYear = thisDate.getFullYear()
	const calendarDefault = `${thisYear}-${thisMonth}`

	// Select month
	const selectMonth = () => {
		const monthPicker = monthRef.current
		const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
			"Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
		const value = monthPicker.value
		const getMonthFromValue = value.split("-")[1]

		return months[getMonthFromValue - 1]
	}

	// Get User Data
	const getUser = JSON.parse(localStorage.getItem('user'))
	const { userData } = getUser

	const { setState } = useContext(Context)

	const setStateValue = (e) => {
		setState(e.target.innerText)
	}

	const logout = () => {
		const redirectUrl = loginUrl;
		localStorage.setItem('user', null)
		window.location.href = redirectUrl
	}

	return (
		<>
			<MainWrapper>
				<Wrapper>
					<InputWrapper>
						<Heading> Choose Month </Heading>
						<Input ref={monthRef} type="month" name="monthPicker" min="2021-07" max="2025-12" defaultValue={calendarDefault}></Input>
						<Button onClick={() => setSelectedMonth(selectMonth())}> Potvrď měsíc </Button>
					</InputWrapper>
					<AccountWrapper>
						<p> {userData.email} </p>
						<AccountButton onClick={logout}>
							Logout
						</AccountButton>
					</AccountWrapper>
				</Wrapper>
				<Wrapper>
					{buttons.map((res, i) =>
						<Button onClick={setStateValue} key={i}>
							<Link to={`/charts/${res === "MKT kanály" ? "Channels" : res}`}>
								<LinkText> {res} </LinkText>
							</Link>
						</Button>
					)}
				</Wrapper>
			</MainWrapper>
		</>
	)
}

export default SectionPicker
