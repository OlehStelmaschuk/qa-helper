import * as TYPE from '../constants/dashboardConstants'
import { getAnswerListService } from '../../services'

export const setHelloTimeAction = (data) => async (dispatch) => {
  dispatch({
    type: TYPE.SET_CURRENT_TIME,
    payload: data,
  })
}

export const changeHelloAction = (setToFalse) => async (dispatch, getState) => {
  if (setToFalse && !getState().dashboard.addHello) {
  } else {
    dispatch({
      type: TYPE.SET_HELLO_MESSAGE,
      payload: setToFalse ? false : !getState().dashboard.addHello,
    })
  }
}

export const filterItems = () => async (dispatch, getState) => {
  const filteredItems = getState().dashboard.answerList.filter((item) => {
    const { title, ru, ua, en, category } = item
    const categoryState = getState().dashboard.category
    const searchString = getState().dashboard.searchString
    const regex = new RegExp(searchString, 'gi')
    if (searchString !== '' && categoryState === 'all')
      return (
        title.match(regex) ||
        (ru && ru.match(regex)) ||
        (ua && ua.match(regex)) ||
        (en && en.match(regex))
      )
    if (categoryState !== 'all') {
      if (searchString !== '')
        return (
          category === categoryState &&
          (title.match(regex) ||
            (ru && ru.match(regex)) ||
            (ua && ua.match(regex)) ||
            (en && en.match(regex)))
        )
      else return category === categoryState
    } else return item
  })

  filteredItems.sort(function (a, b) {
    if(!a.weight) a.weight = 99999;
    if(!b.weight) b.weight = 99999;
    return a.weight - b.weight;
  });

  dispatch({
    type: TYPE.FILTERED_ANSWER_LIST_SET,
    payload: filteredItems,
  })
}

export const setSearchString = (searchString) => async (dispatch) => {
  dispatch({
    type: TYPE.SET_SEARCH_STRING,
    payload: searchString,
  })
}

export const resetSearchString = () => async (dispatch) => {
  dispatch({
    type: TYPE.SET_SEARCH_RESET,
  })
}

export const getAnswerList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TYPE.ANSWER_LIST_REQUEST,
    })

    const token = getState().user.userInfo.token
    const data = await getAnswerListService(token)

    data.sort(function (a, b) {
      if(!a.weight) a.weight = 99999;
      if(!b.weight) b.weight = 99999;
      return a.weight - b.weight;
    });

    dispatch({
      type: TYPE.ANSWER_LIST_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TYPE.ANSWER_LIST_FAIL,
    })
  }
}

export const setCategory = (category) => async (dispatch) => {
  dispatch({
    type: TYPE.SET_CATEGORY,
    payload: category,
  })
}
