import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECIEVE_TWEETS = 'RECIEVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  }
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading)

    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
  }
}

export const recieveTweets = (tweets) => {
  return {
    type: RECIEVE_TWEETS,
    tweets
  }
}

export const toggleTweet = ({ id, authedUser, hasLiked }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}

export const handleToggleTweet = (info) => {
  return (dispatch) => {
    dispatch(toggleTweet(info))

    return saveLikeToggle(info)
      .catch((e) => {
        console.warn('Error in handleToggleTweet: ', e)
        dispatch(toggleTweet(info))
        alert('There was an Error Try Again.')
      })
  }
}

