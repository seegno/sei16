
/**
 * Module dependencies.
 */

import { app } from 'src/client/constants/app-constants';
import { httpRequest } from 'src/client/util/http-request';
import ActionTypes from 'src/client/action-types';

/**
 * Export `getUsers` action.
 */

export function getUsers() {
  const { baseUrl, endpoints } = app.api;

  return async (dispatch) => {
    dispatch({
      type: ActionTypes.GET_USERS_REQUEST
    });

    try {
      const response = await httpRequest(`${baseUrl}/${endpoints.users}`);

      dispatch({
        payload: response.data,
        type: ActionTypes.GET_USERS_SUCCESS
      });
    } catch(e) {
      dispatch({
        error: true,
        payload: e,
        type: ActionTypes.GET_USERS_FAILURE
      });
    }
  }
}
