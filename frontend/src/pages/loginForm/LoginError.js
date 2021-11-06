import React, { useEffect } from 'react';

import { STATIC_DATA } from '../../assets/static_data/StaticData';
import { LocationReloadSection } from './styles';

const LoginError = () => {
	const redirectUrl = STATIC_DATA.URL.LOGIN_PAGE;
	const thisUser = sessionStorage.getItem('user');
	const user = JSON.parse(thisUser);

	useEffect(() => {
		setTimeout(() => {
			const isNotLoggedId = user === null;

			if (isNotLoggedId) {
				window.location.href = redirectUrl;
			};
		}, 5000);
	});

	return (
		<>
			<LocationReloadSection>
				<h3>
					Nejste autorizováni pro shlédnutí obsahu, prosímte přihlašte se nebo, v případě problému, kontaktujte administrátora
				</h3>
				<p>
					Během 5 vteřin budete přesměrováni na přihlašovací stránku, pokud se tak nestane, klikněte prosím <a href={redirectUrl}>na tento odkaz</a>
				</p>
			</LocationReloadSection>
		</>
	)
};

export default LoginError;
