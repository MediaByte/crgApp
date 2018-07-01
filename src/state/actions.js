import { apiCall } from './api/api'

import { 
	USER_VALID,
	REQUEST_LISTINGS_PENDING,
	REQUEST_LISTINGS_SUCCESS,
	REQUEST_LISTINGS_FAILED
 } from './constants.js'

export const isUserAuthorized = (status) => ({ type: USER_VALID, payload: status });

export const requestListings = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING })
	apiCall('https://jsonplaceholder.typicode.com/users')
	    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
	    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}