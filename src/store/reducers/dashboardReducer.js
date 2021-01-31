import * as TYPE from '../constants/dashboardConstants'

export const dashboardReducer = (
  state = {
    time: 'auto',
    addHello: false,
    searchString: '',
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
    case TYPE.SET_HELLO_MESSAGE: {
      return {
        ...state,
        addHello: payload,
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
    default:
      return state
  }
}
