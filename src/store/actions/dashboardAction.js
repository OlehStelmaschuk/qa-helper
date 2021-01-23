import * as TYPE from '../constants/dashboardConstants'
import { getAnswerListService } from '../../services'

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

export const getAnswerList = () => async (dispatch) => {
  try {
    dispatch({
      type: TYPE.ANSWER_LIST_REQUEST,
    })

    const data = await getAnswerListService()

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
