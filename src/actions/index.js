import deputiesApi from '../api/DeputiesApi';
export const REQUEST_DEPUTIES = 'REQUEST_DEPUTIES';
export const RECEIVE_DEPUTIES = 'RECEIVE_DEPUTIES';
export const RECEIVE_DEPUTY = 'RECEIVE_DEPUTY';
export const UPDATE_DEPUTY = 'UPDATE_DEPUTY';

export const requestDeputies = () => ({
    type: REQUEST_DEPUTIES
});

export const receiveDeputies = (json) => ({
    type: RECEIVE_DEPUTIES,
    deputies: json,
    receivedAt: Date.now()
});

export const updateDeputySuccess = (json) => ({
    type: UPDATE_DEPUTY,
    deputy: json
});

export const receiveDeputy = (json) => ({
    type: RECEIVE_DEPUTY,
    deputy: json,
    receivedAt: Date.now()
});

const fetchDeputies = () => {
    return (dispatch) => {
        dispatch(requestDeputies());
        return deputiesApi.getAllDeputies().then(responseDeputies => {
            dispatch(receiveDeputies(responseDeputies));
        }).catch(error => {
            throw (error);
        });
    };
};

export const fetchDeputiesIfNeeded = () => (dispatch, getState) => {
    return dispatch(fetchDeputies());
};

const fetchDeputyById = (id) => {
    return (dispatch) => {
        return deputiesApi.getDeputyById(id).then(responseDeputy => {
            dispatch(receiveDeputy(responseDeputy));
        }).catch(error => {
            throw (error);
        });
    };
};

export const fetchDeputyIfNeeded = (id) => (dispatch, getState) => {
    return dispatch(fetchDeputyById(id));
};

export const updateDeputy = (deputy) => {
    return (dispatch) => {
        return deputiesApi.updateDeputy(deputy).then(responseDeputy => {
            dispatch(updateDeputySuccess(responseDeputy));
        }).catch(error => {
            throw (error);
        });
    };
}
