import * as TYPE from '../constants/dashboardConstants'

export const dashboardReducer = (
  state = { time: 'none', addHello: false },
  { type, payload }
) => {
  switch (type) {
    case TYPE.SET_CURRENT_TIME: {
      return {
        ...state,
        time: payload,
      }
    }
    case TYPE.SET_HELLO_MESSAGE: {
      return {
        ...state,
        addHello: payload,
      }
    }
    default:
      return state
  }
}
