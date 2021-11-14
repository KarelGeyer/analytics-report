import React, { useState } from 'react'
import { deleteThisUser, updateThisUser } from '../../helpers/axios/userCalls';

import SuccessPopup from '../../components/popups/successPopup/SuccessPopup';
import ErrorPopup from '../../components/popups/errorPopup/ErrorPopup';

import { Form, Heading, Wrapper } from './styles'

const Account = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [success, setSuccess] = useState()
  const [error, setError] = useState()
  const [link, setLink] = useState()

  const deleteAccount = () => {
    deleteThisUser(email, password)
      .then(() => {
        setSuccess('vymazán')
        setLink('/login')
      })
      .catch((err) => {
        setError(err)
      })
  };

  const submit = (e) => {
    e.preventDefault()
    updateThisUser(email, password, newPassword)
      .then(() => {
        setSuccess('upraveny')
        setLink('/')
      })
      .catch((err) => {
        setError(err)
      })
  }

  return (
    <>
      {success && <SuccessPopup link={link} event={success} />}
      {error && <ErrorPopup link='/' error={error} />}
      <Heading> Můj profil</Heading>
      <Form onSubmit={submit}>
        <Wrapper>
          <label>
            Email:
          </label>
          <input type='email' name='email' defaultValue={email && email} onChange={(e) => setEmail(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label>
            Heslo:
          </label>
          <input type={showPassword ? "text" : "password"} name='password' required onChange={(e) => setPassword(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label>
            Nové Heslo:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name='new password'
            required
            onChange={(e) => setNewPassword(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <button type='submit' name='save' onClick={() => setShowPassword(!showPassword)}> Zobrazit Heslo </button>
          <button type='submit' name='save'> Uložit </button>
          <button type='button' name='delete' className='delete' onClick={deleteAccount}> Smazat účet </button>
        </Wrapper>
      </Form>
    </>
  );
};

export default Account;
