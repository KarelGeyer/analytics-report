import React, { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import { Section, Wrapper, LinkText, Button } from './styles';

const SectionPicker = () => {
	const buttons = ['Products', 'Categories', 'Data', 'Customers', 'MKT kanály'];

	const monthRef = useRef();
	const { setSelectedMonth, setState } = useContext(Context);

	const thisDate = new Date();
	const thisMonth = thisDate.getMonth() + 1;
	const thisYear = thisDate.getFullYear();
	const calendarDefault = `${thisYear}-${thisMonth}`;

	const selectMonth = () => {
		const monthPicker = monthRef.current
		const months = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen',
			'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
		const value = monthPicker.value;
		const getMonthFromValue = value.split('-')[1];

		return months[getMonthFromValue - 1];
	};

	const setStateValue = (e) => {
		setState(e.target.innerText);
	};

	return (
		<>
			<Section>
				<div>
					<Wrapper>
						<h2> Choose Month </h2>
						<input ref={monthRef} type='month' name='monthPicker' min='2021-07' max='2025-12' defaultValue={calendarDefault} />
						<Button onClick={() => setSelectedMonth(selectMonth())}> Potvrď měsíc </Button>
					</Wrapper>
				</div>
				<div>
					{buttons.map((res, i) =>
						<Button onClick={setStateValue} key={i}>
							<Link to={`/charts/${res === 'MKT kanály' ? 'Channels' : res}`}>
								<LinkText> {res} </LinkText>
							</Link>
						</Button>
					)}
				</div>
			</Section>
		</>
	)
};

export default SectionPicker;
