
/**
 * Module dependencies.
 */

import { assign, defaults, isPlainObject, mapKeys, merge, omit } from 'lodash';
import { stringify } from 'qs';

/**
 * Content type headers.
 */

const CONTENT_TYPE_APPLICATION_JSON = { 'content-type': 'application/json;charset=utf-8' };

/**
 * Export `defaultHttpHeaders`.
 */

const defaultHttpHeaders = {
  common: { 'accept': 'application/json, text/plain, */*' },
  patch: CONTENT_TYPE_APPLICATION_JSON,
  post: CONTENT_TYPE_APPLICATION_JSON,
  put: CONTENT_TYPE_APPLICATION_JSON
};

/**
 * Export `httpRequest`.
 */

export async function httpRequest(url: string, requestConfig: Object = {}) {
  if (!isPlainObject(requestConfig)) {
    throw TypeError(`Value of argument "requestConfig" violates contract, expected PlainObject got ${typeof requestConfig}`)
  }

  requestConfig = assign({ method: 'get' }, requestConfig);

  // Format request header keys to lowercase.
  const requestHeaders = mapKeys(requestConfig.headers, (value, key) => key.toLowerCase());
  const requestMethod = requestConfig.method.toLowerCase();

  // Merge given headers with default headers.
  requestConfig.headers = merge({}, defaultHttpHeaders.common, defaultHttpHeaders[requestMethod], requestHeaders);

  if (requestConfig.query) {
    url = `${url}?${stringify(requestConfig.query)}`;
    requestConfig.headers['content-type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    requestConfig = omit(requestConfig, 'query');
  } else if (requestConfig.body) {
    requestConfig.body = JSON.stringify(requestConfig.body);
  }

  const response = await fetch(url, requestConfig);

  if (!response.ok) {
    throw new Error(response.message);
  }

  try {
    const data = await response.json();

    return defaults({ data }, response);
  } catch(e) {
    return response;
  }
}
