import axios from 'axios';
import { STATIC_DATA } from '../assets/static_data/StaticData'

export const eventInstance = axios.create({
  baseURL: STATIC_DATA.URL.FETCH_EVENTS,
});
