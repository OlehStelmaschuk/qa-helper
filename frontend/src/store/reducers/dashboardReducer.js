import * as TYPE from '../constants/dashboardConstants'
import { whenMapStateToPropsIsMissing } from 'react-redux/lib/connect/mapStateToProps'

export const dashboardReducer = (
  state = {
    time: 'auto',
    searchString: '',
    addHello: false,
    answerList: {},
    category: 'all',
    filteredAnswerList: {},
  },
  { type, payload }
) => {
  switch (type) {
    case TYPE.SET_CURRENT_TIME: {
      return {
        ...state,
        time: payload,
      }
    }
    case TYPE.SET_SEARCH_STRING: {
      return {
        ...state,
        searchString: payload,
      }
    }
    case TYPE.FILTERED_ANSWER_LIST_SET: {
      return {
        ...state,
        filteredAnswerList: payload,
      }
    }
    case TYPE.SET_SEARCH_RESET: {
      return {
        ...state,
        searchString: '',
        filteredAnswerList: state.answerList,
      }
    }
    case TYPE.ANSWER_LIST_REQUEST: {
      return {
        ...state,
        answerList: {},
        answerListSuccess: false,
      }
    }
    case TYPE.ANSWER_LIST_SUCCESS: {
      return {
        ...state,
        answerList: payload,
        filteredAnswerList: payload,
        answerListSuccess: true,
      }
    }
    case TYPE.ANSWER_LIST_FAIL: {
      return {
        ...state,
        answerList: {},
        answerListSuccess: false,
        error: payload,
      }
    }
    case TYPE.SET_CATEGORY: {
      return {
        ...state,
        category: payload,
      }
    }
    case TYPE.SET_HELLO_MESSAGE: {
      return {
        ...state,
        addHello: payload,
      }
    }
    case TYPE.POST_DATA:
    case TYPE.POST_CREATE:
    case TYPE.POST_UPDATE: {
      return {
        ...state,
        post: payload,
      }
    }
    case TYPE.POST_DELETE: {
      return {
        ...state,
      }
    }
    case TYPE.POST_CHANGE: {
      return {
        ...state,
        newPost: payload,
      }
    }
    case TYPE.POST_DATA_FAIL: {
      return {
        ...state,
        post: null,
        error: payload,
      }
    }
    case TYPE.POST_CLEAR: {
      return {
        ...state,
        post: null,
      }
    }
    default:
      return state
  }
}
