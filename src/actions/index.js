export const REQUEST_DEPUTIES = 'REQUEST_DEPUTIES'
export const RECEIVE_DEPUTIES = 'RECEIVE_DEPUTIES'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const selectReddit = reddit => ({
  type: SELECT_REDDIT,
  reddit
})

export const invalidateReddit = reddit => ({
  type: INVALIDATE_REDDIT,
  reddit
})

export const requestPosts = reddit => ({
  type: REQUEST_DEPUTIES,
  reddit
})

export const receivePosts = (reddit, json) => ({
  type: RECEIVE_DEPUTIES,
  reddit,
  posts: json,
  receivedAt: Date.now()
})

const fetchPosts = reddit => dispatch => {
  dispatch(requestPosts(reddit));
  
  return fetch(`http://localhost:5000/deputies`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit, json)))
}

const shouldFetchPosts = (state, reddit) => {
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchDeputiesIfNeeded = reddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), reddit)) {
    return dispatch(fetchPosts(reddit))
  }
}