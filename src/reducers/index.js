import { combineReducers } from 'redux'
import {
  SELECT_REDDIT, REQUEST_DEPUTIES, RECEIVE_DEPUTIES
} from '../actions'

const selectedReddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_DEPUTIES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_DEPUTIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsByReddit = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DEPUTIES:
    case REQUEST_DEPUTIES:
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit
})

export default rootReducer
