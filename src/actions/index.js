export const REQUEST_DEPUTIES = 'REQUEST_DEPUTIES';
export const RECEIVE_DEPUTIES = 'RECEIVE_DEPUTIES';

export const requestDeputies = () => ({
    type: REQUEST_DEPUTIES
})

export const receiveDeputies = (json) => ({
    type: RECEIVE_DEPUTIES,
    deputies: json,
    receivedAt: Date.now()
})

const fetchDeputies = () => dispatch => {
    dispatch(requestDeputies());

    return fetch(`http://localhost:5000/deputies`)
        .then(response => response.json())
        .then(json => dispatch(receiveDeputies(json)))
}

export const fetchDeputiesIfNeeded = () => (dispatch, getState) => {
    return dispatch(fetchDeputies())
}