import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(body =>
    Promise.reject({
      statusText: response.statusText,
      body,
    }),
  );
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const opts = {
    headers: {},
    credentials: 'include',
    ...options,
  };
  const accessToken = config.accessToken || opts.accessToken;
  const requestUrl = opts.webpageServer
    ? `${config.webpageServerEndpoint}${url}`
    : `${config.apiEndpoint}${url}`;

  opts.headers['Content-Type'] =
    opts.headers['Content-Type'] || 'application/json';
  if (accessToken && !opts.headers.Authorization) {
    opts.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (typeof opts.body === 'object') {
    opts.body = JSON.stringify(opts.body);
  }
  return fetch(requestUrl, opts)
    .then(checkStatus)
    .then(parseJSON);
}

export function getErrorBody(resp) {
  return resp.json.bind(resp);
}

export const config = {
  apiEndpoint:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:9000' // Production API
      : 'http://localhost:9000', // Development API
};
