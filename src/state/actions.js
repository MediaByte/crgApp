import { 
	USER_VALID,
	REQUEST_LISTINGS_PENDING,
	REQUEST_LISTINGS_SUCCESS,
	REQUEST_LISTINGS_FAILED,
	USER_INPUT_BEDROOMS_MIN,
	USER_INPUT_BEDROOMS_MAX,
	USER_INPUT_DATE_FROM,
	USER_INPUT_DATE_TO,
	USER_INPUT_PRICE_MIN,
	USER_INPUT_PRICE_MAX,
	USER_INPUT_CITY,
 } from './constants.js';
 import { apiCall } from './api/api';
export const isUserAuthorized = (status) => ({ type: USER_VALID, payload: status });
export const minBeds = (min) => ({ type: USER_INPUT_BEDROOMS_MIN, payload: min });
export const maxBeds = (max) => ({ type: USER_INPUT_BEDROOMS_MAX, payload: max });
export const minPrice = (min) => ({ type: USER_INPUT_PRICE_MIN, payload: min });
export const maxPrice = (max) => ({ type: USER_INPUT_PRICE_MAX, payload: max });
export const fromDate = (date) => ({ type: USER_INPUT_DATE_FROM, payload: date });
export const toDate = (date) => ({ type: USER_INPUT_DATE_TO, payload: date });
export const city = (city) => ({ type: USER_INPUT_CITY, payload: city });
export const requestListings = (api) => (dispatch) => {
	dispatch({ type: REQUEST_LISTINGS_PENDING })
		apiCall(api)
		    .then(data => dispatch({ type: REQUEST_LISTINGS_SUCCESS, payload: data }))
		    .catch(error => dispatch({ type: REQUEST_LISTINGS_FAILED, payload: error }));
}


