import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { STATIC_DATA } from '../../assets/static_data/StaticData';

import { Section, Form } from './styles';

const LoginForm = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logedIn, setLogedIn] = useState(false);
  const userLogin = {
    email: email,
    password: password
  };

  const fetchUrl = STATIC_DATA.URL.LOGIN_USER;

  const login = (e) => {
    e.preventDefault();

    axios.post(fetchUrl, userLogin)
      .then(res => {
        const isValid = res.status === 200;

        if (!isValid) {
          alert('Něco se pokazilo, prosím, kontaktujte administrátora');
          return
        }

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
    <Section>
      <Form onSubmit={login}>
        <div>
          <label>
						Email:
          </label>
          <input type='text' name='username' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>
						Heslo:
          </label>
          <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button>
						Přihlásit se
          </button>
        </div>
        <div>
          <Link to={'/'}>
            {logedIn &&
              <button>
                {logedIn && 'pokračuj'}
              </button>
            }
          </Link>
        </div>
      </Form>
    </Section>
  )
};

export default LoginForm;
