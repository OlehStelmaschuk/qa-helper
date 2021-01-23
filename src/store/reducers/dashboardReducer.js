import * as TYPE from '../constants/dashboardConstants'

export const dashboardReducer = (
  state = {
    time: 'none',
    addHello: false,
    searchString: '',
    answerList: {},
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
        filteredAnswerList: state.answerList.filter((item) => {
          const regex = new RegExp(`${payload}`, 'gi')
          return item.title.match(regex) || item.message.match(regex)
        }),
      }
    }
    case TYPE.SET_SEARCH_RESET: {
      return {
        ...state,
        searchString: '',
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
    default:
      return state
  }
}
