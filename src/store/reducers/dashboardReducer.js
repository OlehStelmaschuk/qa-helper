import * as TYPE from '../constants/dashboardConstants'

export const dashboardReducer = (
  state = {
    time: 'auto',
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
          if (state.searchString !== '')
            return (
              item.title.match(regex) ||
              (item.ru && item.ru.match(regex)) ||
              (item.ua && item.ua.match(regex)) ||
              (item.en && item.en.match(regex))
            )
          else return item
        }),
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
    default:
      return state
  }
}
