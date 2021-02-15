import * as TYPE from '../constants/userConst'

export const userReducer = (state = {}, { type, payload }) => {
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
    case TYPE.USER_LOGOUT:{
      return {
        loading: false,
      }
    }
    default:
      return state
  }
}
