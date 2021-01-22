import * as TYPE from '../constants/dashboardConstants'

export const setHelloTimeAction = (data) => async (dispatch) => {
  dispatch({
    type: TYPE.SET_CURRENT_TIME,
    payload: data,
  })
}

export const addHelloAction = () => async (dispatch, getState) => {
  dispatch({
    type: TYPE.SET_HELLO_MESSAGE,
    payload: !getState().dashboard.addHello,
  })
}
