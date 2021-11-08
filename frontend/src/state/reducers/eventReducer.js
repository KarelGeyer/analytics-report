import { EVENT_TYPES } from '../types'
import { STATIC_DATA } from '../../assets/static_data/StaticData'

const { ADD_EVENT } = EVENT_TYPES

const eventReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_EVENT:

      return state;

    default:
      return
  }
}

export default eventReducer;