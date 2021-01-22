import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import { dashboardReducer } from './dashboardReducer'

const reducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
})

export default reducer
