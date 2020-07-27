import * as ActionTypes from './ActionTypes'

import { baseUrl } from './baseUrl'


export const fetchData = () => (dispatch) => {
    dispatch(dataLoading(true));

    return fetch(baseUrl)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(data => dispatch(addData(data)))
    .catch(error => dispatch(dataFailed(error.message)));
}

export const addData = (data) =>({
    type: ActionTypes.DATA_LOADED,
    payload : data
})

export const dataLoading = () => ({
    type: ActionTypes.DATA_LOADING
});

export const dataFailed = (errmess) => ({
    type: ActionTypes.DATA_FAILED,
    payload: errmess
});