import * as TYPE from '../constants/userConst'

export const userReducer = (
  state = { loading: false, userInfo: {} },
  { type, payload }
) => {
  switch (type) {
    case TYPE.USER_LOGIN_REQUEST: {
      return {
        loading: true,
      }
    }
    case TYPE.USER_LOGIN_SUCCESS: {
      return {
        loading: false,
        success: true,
        userInfo: payload,
      }
    }
    case TYPE.USER_LOGIN_FAIL: {
      return {
        loading: false,
        success: false,
        error: payload,
      }
    }
    default:
      return state
  }
}
