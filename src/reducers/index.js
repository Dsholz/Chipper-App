import { combineReducers } from 'redux'
import authedUser from '../reducers/authedUser'
import tweets from '../reducers/tweets'
import users from '../reducers/users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  tweets,
  users,
  loadingBar: loadingBarReducer
})