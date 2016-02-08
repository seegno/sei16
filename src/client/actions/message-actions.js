
/**
 * Module dependencies.
 */

import { app } from 'src/client/constants/app-constants';
import { httpRequest } from 'src/client/util/http-request';
import ActionTypes from 'src/client/action-types';

/**
 * Export `getMessages` action.
 */

export function getMessages() {
  const { baseUrl, endpoints } = app.api;

  return async (dispatch) => {
    dispatch({
      type: ActionTypes.GET_MESSAGES_REQUEST
    });

    try {
      const response = await httpRequest(`${baseUrl}/${endpoints.messages}`);

      dispatch({
        type: ActionTypes.GET_MESSAGES_SUCCESS,
        payload: response.data
      });
    } catch(e) {
      dispatch({
        type: ActionTypes.GET_MESSAGES_FAILURE,
        error: true,
        payload: e
      });
    }
  }
}

/**
 * Export `addMessage` action.
 */

export function addMessage(message) {
  return {
    type: ActionTypes.ADD_MESSAGE,
    payload: { ...message }
  };
}
