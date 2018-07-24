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
const initialState = {
	userValid: false,
}
export const isUserAuthorized = (state=initialState, action={}) => {
	switch(action.type) {
		case USER_VALID:
			return Object.assign({}, state, { userValid: action.payload });
		default: 
			return state;
	}
}

const userState = {
  fromDate: '09/01/2018',
  toDate: '09/01/2018',
  minBeds: 1,
  maxBeds: 1,
  city: 'Somerville',
  minPrice: '1750',
  maxPrice: '',
}
export const userSettings = (state=userState, action={}) => {
    switch(action.type) {
      case USER_INPUT_BEDROOMS_MIN:
        return Object.assign({}, state, { minBeds: action.payload });
      case USER_INPUT_BEDROOMS_MAX:
        return Object.assign({}, state, { maxBeds: action.payload });
      case USER_INPUT_PRICE_MIN:
        return Object.assign({}, state, { minPrice: action.payload });
      case USER_INPUT_PRICE_MAX:
        return Object.assign({}, state, { maxPrice: action.payload });
      case USER_INPUT_DATE_FROM:
        return Object.assign({}, state, { fromDate: action.payload });
      case USER_INPUT_DATE_TO:
        return Object.assign({}, state, { toDate: action.payload });
      case USER_INPUT_CITY:
        return Object.assign({}, state, { city: action.payload });
      default: 
        return state;
    }
}

const initialStateListings = {
  listings: [],
  isPending: true
}
export const requestListings = (state=initialStateListings, action={}) => {
  switch (action.type) {
    case REQUEST_LISTINGS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_LISTINGS_SUCCESS:
      return Object.assign({}, state, {listings: action.payload, isPending: false})
    case REQUEST_LISTINGS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

