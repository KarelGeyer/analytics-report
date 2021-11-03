import React, { useState, useContext, useReducer } from 'react'
import { UserContext } from '../../context/Context'
import { userReducer } from '../../state/reducers'
import { USER_ACTIONS } from '../../state/actions'
import { Form, Heading, Wrapper } from './styles'

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const [state, dispatch] = useReducer(userReducer, [user]);

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const newUser = {
    email: email,
    password: password,
    newPassword: newPassword
  };

  const { UPDATE_USER, DELETE_USER } = USER_ACTIONS;

  const deleteAccount = () => {
    dispatch({ type: DELETE_USER, payload: newUser })
  };

  const submit = (e) => {
    e.preventDefault()
    dispatch({ type: UPDATE_USER, payload: newUser })
  }

  return (
    <>
      <Heading> Můj profil</Heading>
      <Form onSubmit={submit}>
        <Wrapper>
          <label>
            Email:
          </label>
          <input type="email" name="email" defaultValue={user && user.email} onChange={(e) => setEmail(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label>
            Heslo:
          </label>
          <input type="text" name="password" required onChange={(e) => setPassword(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <label>
            Nové Heslo:
          </label>
          <input type="text" name="new password" required onChange={(e) => setNewPassword(e.target.value)} />
        </Wrapper>
        <Wrapper>
          <button type="submit" name="save"> Uložit </button>
          <button type="button" name="delete" className="delete" onClick={deleteAccount}> Smazat účet </button>
        </Wrapper>
      </Form>
    </>
  );
};

export default Account;
