import { USER_TYPES } from '../types'
import { STATIC_DATA } from '../../assets/static_data/StaticData'
import axios from 'axios';

const { UPDATE_USER, DELETE_USER } = USER_TYPES

export const userReducer = (state, action) => {
  const { payload } = action;
  const { token } = state;

  const userInstance = axios.create({
    baseURL: STATIC_DATA.URL.FETCH_USERS,
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

      return state;

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
          window.location.href = STATIC_DATA.URL.LOGIN_PAGE
        })
        .catch((err) => {
          throw err.message;
        })

      return state;

    default:
      return
  }
}