import { 
	USER_VALID,
	REQUEST_LISTINGS_PENDING,
	REQUEST_LISTINGS_SUCCESS,
	REQUEST_LISTINGS_FAILED
 } from './constants.js'

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