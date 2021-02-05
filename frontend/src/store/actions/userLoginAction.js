import * as TYPE from '../constants/userConst'
import { loginRequest } from '../../services'

export const login = (user, password) => async (dispatch) => {
  try {
    dispatch({
      type: TYPE.USER_LOGIN_REQUEST,
    })

    const data = await loginRequest(user, password)

    dispatch({
      type: TYPE.USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (err) {
    dispatch({
      type: TYPE.USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    })
  }
}