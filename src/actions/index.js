export const REQUEST_DEPUTIES = 'REQUEST_DEPUTIES';
export const RECEIVE_DEPUTIES = 'RECEIVE_DEPUTIES';
export const RECEIVE_DEPUTY = 'RECEIVE_DEPUTY';

export const requestDeputies = () => ({
    type: REQUEST_DEPUTIES
});

export const receiveDeputies = (json) => ({
    type: RECEIVE_DEPUTIES,
    deputies: json,
    receivedAt: Date.now()
});

export const receiveDeputy = (json) => ({
    type: RECEIVE_DEPUTY,
    deputy: json,
    receivedAt: Date.now()
});

const fetchDeputies = () => dispatch => {
    dispatch(requestDeputies());

    return fetch(`http://localhost:5000/deputies`)
        .then(response => response.json())
        .then(json => dispatch(receiveDeputies(json)));
};

export const fetchDeputiesIfNeeded = () => (dispatch, getState) => {
    return dispatch(fetchDeputies());
};

const fetchDeputyById = (id) => dispatch => {
    return fetch('http://localhost:5000/deputies/{0}'.replace('{0}', id))
        .then(response => response.json())
        .then(json => dispatch(receiveDeputy(json)));
};

export const fetchDeputyIfNeeded = (id) => (dispatch, getState) => {
    return dispatch(fetchDeputyById(id));
};