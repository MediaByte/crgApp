import { apiCall } from './api/api'
import { 
	USER_VALID,
	REQUEST_LISTINGS_PENDING,
	REQUEST_LISTINGS_SUCCESS,
	REQUEST_LISTINGS_FAILED
 } from './constants.js'

export const isUserAuthorized = (status) => ({ type: USER_VALID, payload: status });

export const requestListings = (api) => (dispatch) => {
	dispatch({ 
		type: REQUEST_LISTINGS_PENDING 
	})
		apiCall(api)
		    .then(data => dispatch({ 
		    	type: REQUEST_LISTINGS_SUCCESS, 
		    	payload: data 
		    }))
		    .catch(error => dispatch({ 
		    	type: REQUEST_LISTINGS_FAILED, 
		    	payload: error 
		    }))
}