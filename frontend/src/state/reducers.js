import { USER_ACTIONS } from './actions'
import { STATIC_DATA } from '../assets/static_data/StaticData'
import axios from 'axios';

const { ADD_USER, UPDATE_USER, DELETE_USER } = USER_ACTIONS

export const userReducer = (user, action) => {
  const { payload } = action;

  switch (action.type) {
    case UPDATE_USER:
      axios.patch(STATIC_DATA.URL.fetchUsers, payload)
        .then(res => {
          const { status } = res;

          if (status === 201) {

          }
        })
        .catch((err) => { return [user] })
      return user;

    case DELETE_USER:
      axios.delete(STATIC_DATA.URL.fetchUsers, { data: payload })
        .then(res => {
          console.log(res)
        })
        .catch((err) => { console.log(err) })

      return user;

    default:
      return
  }
}