import React, {useState} from 'react';
import axios from 'axios';
// Import data
import {STATIC_DATA} from '../../data/StaticData';
// import styles
import {LoginSection, Form, Input, FormWrapper, Button} from './styles';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const storeUserName = (e) => {
        setEmail(e.target.value)
    };

    const storePassword = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    const login = () => {
        const fetchUrl = STATIC_DATA.URL.fetchUser;
        const redirectUrl = STATIC_DATA.URL.charts;
        const userLogin = {
            email: email,
            password: password
        };
        axios.post(fetchUrl, userLogin)
        .then(res => {
            const isValid = res.status === 200
            if (isValid){
                const data = res.data;
                const user = {
                    token: data.token,
                    userData: data.user
                }
                localStorage.setItem(`user`, JSON.stringify(user))
                window.location.href = redirectUrl  
            } else {
                alert('Něco se pokazilo, prosím, kontaktujte administrátora')
            }
        }).catch((err) => (
            alert('Něco se pokazilo, prosím, kontaktujte administrátora')
        ))
    };

    return (
        <LoginSection>
            <Form onSubmit={handleSubmit}>
                <FormWrapper>
                    <label>
                        Email:
                    </label>
                    <Input type='text' name='username' onChange={storeUserName}/>
                </FormWrapper>
                <FormWrapper>
                    <label>
                        Heslo:
                    </label>
                    <Input type='password' name='password'  onChange={storePassword}/>
                </FormWrapper>
                <FormWrapper>
                    <Button onClick={login}>
                        Přihlásit se
                    </Button>
                </FormWrapper>
            </Form>
        </LoginSection>
    )
}

export default LoginForm
