import axios from 'axios';
import { STATIC_DATA } from '../../assets/static_data/StaticData'

export const eventInstance = axios.create({
  baseURL: STATIC_DATA.URL.FETCH_EVENTS,
});

eventInstance.interceptors.request.use(
  config => {
    config.headers = {
      'auth-token': JSON.parse(localStorage.getItem('user')).token,
    }

    return config
  }
)

export const userInstance = axios.create({
  baseURL: STATIC_DATA.URL.FETCH_USERS,
});

userInstance.interceptors.request.use(
  config => {
    config.headers = {
      'auth-token': JSON.parse(localStorage.getItem('user')).token,
    }

    return config
  }
)
