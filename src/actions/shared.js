import { getInitialData } from '../utils/api'
import { recieveUsers } from '../actions/users'
import { recieveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(recieveTweets(tweets))
        dispatch(recieveUsers(users))
        dispatch(setAuthedUser('tylermcginnis'))
        dispatch(hideLoading())
      })
  }
}