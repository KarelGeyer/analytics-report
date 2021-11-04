import { USER_TYPES } from './types'
import { STATIC_DATA } from '../assets/static_data/StaticData'
import axios from 'axios';

const { UPDATE_USER, DELETE_USER } = USER_TYPES

export const userReducer = (user, action) => {
  const { payload } = action;
  const { token } = user;

  const userInstance = axios.create({
    baseURL: STATIC_DATA.URL.fetchUsers,
    headers: { 'auth-token': token && token }
  });

  switch (action.type) {
    case UPDATE_USER:
      if (!token) {
        return 'nemohli jsme nalézt Váš účet. prosím, přihlašte se znovu'
      }

      userInstance.patch('', {
        email: payload.email,
        password: payload.password,
        newPassword: payload.newPassword
      })
        .catch(err => {
          throw err
        });

      return user;

    case DELETE_USER:
      if (!token) {
        return 'nemohli jsme nalézt Váš účet. prosím, přihlašte se znovu'
      }

      userInstance.delete('', {
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(() => {
          localStorage.clear();
          window.location.href = STATIC_DATA.URL.loginPage
        })
        .catch((err) => {
          throw err.message;
        })

      return user;

    default:
      return
  }
}