import React, { useState, useReducer } from 'react'

import { userReducer } from '../../state/reducers/userReducers'
import { USER_TYPES } from '../../state/types'
import { Form, Heading, Wrapper } from './styles'

const Account = () => {
  const getuser = localStorage.getItem('user');
  const user = JSON.parse(getuser);

  const [state, dispatch] = useReducer(userReducer, user);
  const { UPDATE_USER, DELETE_USER } = USER_TYPES;

  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState(state.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const deleteAccount = () => {
    dispatch({
      type: DELETE_USER, payload: {
        email: email,
        password: password,
        newPassword: newPassword,
      }
    })
  };

  const submit = (e) => {
    e.preventDefault()
    dispatch({
      type: UPDATE_USER, payload: {
        email: email,
        password: password,
        newPassword: newPassword,
      }
    })
  }

  return (
    <>
      <Heading> Můj profil</Heading>
      <Form onSubmit={submit}>
        <Wrapper>
          <label>
            Email:
          </label>
          <input type="email" name="email" defaultValue={user && state.email} onChange={(e) => setEmail(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label>
            Heslo:
          </label>
          <input type={showPassword ? "text" : "password"} name="password" required onChange={(e) => setPassword(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label>
            Nové Heslo:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="new password"
            required
            onChange={(e) => setNewPassword(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <button type="submit" name="save" onClick={() => setShowPassword(!showPassword)}> Zobrazit Heslo </button>
          <button type="submit" name="save"> Uložit </button>
          <button type="button" name="delete" className="delete" onClick={deleteAccount}> Smazat účet </button>
        </Wrapper>
      </Form>
    </>
  );
};

export default Account;
