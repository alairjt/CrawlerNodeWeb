import { combineReducers } from 'redux';
import {
  REQUEST_DEPUTIES, RECEIVE_DEPUTIES, RECEIVE_DEPUTY, UPDATE_DEPUTY
} from '../actions';

const deputies = (action, state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}) => {
  switch (action.type) {
    case REQUEST_DEPUTIES:
      return {
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_DEPUTIES:
      return {
        isFetching: false,
        didInvalidate: false,
        items: action.deputies,
        lastUpdated: action.receivedAt
      }
    case RECEIVE_DEPUTY:
      return {
        isFetching: false,
        didInvalidate: false,
        deputy: action.deputy,
        lastUpdated: action.receivedAt
      }
    case UPDATE_DEPUTY:
      return {
        updateSuccess: true,
        deputy: action.deputy,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const deputiesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DEPUTY:
    case RECEIVE_DEPUTIES:
    case UPDATE_DEPUTY:
      return {
        ...state,
        data: deputies(action)
      };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  deputiesReducer
})

export default rootReducer
