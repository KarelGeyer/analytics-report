import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { STATIC_DATA } from '../../assets/static_data/StaticData';

import { LoginSection, Form, Input, FormWrapper, Button } from './styles';

const LoginForm = ({ setUser }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [logedIn, setLogedIn] = useState(false);

	const fetchUrl = STATIC_DATA.URL.loginUser;
	const userLogin = {
		email: email,
		password: password
	};

	const login = (e) => {
		e.preventDefault();

		axios.post(fetchUrl, userLogin)
			.then(res => {
				const isValid = res.status === 200;

				if (!isValid) {
					alert('Něco se pokazilo, prosím, kontaktujte administrátora');
					return
				};

				const data = res.data;
				const user = {
					token: data.token,
					email: data.user.email
				};

				localStorage.setItem('user', JSON.stringify(user));
				setUser(user);
				setLogedIn(true);
			}).catch(() => (
				alert('Něco se pokazilo, prosím, kontaktujte administrátora')
			));
	};

	return (
		<LoginSection>
			<Form onSubmit={login}>
				<FormWrapper>
					<label>
						Email:
					</label>
					<Input type='text' name='username' onChange={(e) => setEmail(e.target.value)} />
				</FormWrapper>
				<FormWrapper>
					<label>
						Heslo:
					</label>
					<Input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
				</FormWrapper>
				<FormWrapper>
					<Button>
						Přihlásit se
					</Button>
				</FormWrapper>
				<FormWrapper>
					<Link to={'/'}>
						<Button>
							{logedIn && 'pokračuj'}
						</Button>
					</Link>
				</FormWrapper>
			</Form>
		</LoginSection>
	)
};

export default LoginForm;
