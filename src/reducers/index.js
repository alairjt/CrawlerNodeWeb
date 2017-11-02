import { combineReducers } from 'redux';
import {
  REQUEST_DEPUTIES, RECEIVE_DEPUTIES
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
    default:
      return state
  }
}

const deputiesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DEPUTIES:
      let a = {
        ...state,
        data: deputies(action)
      };

      return a;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  deputiesReducer
})

export default rootReducer
