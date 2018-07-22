import { 
	USER_VALID,
	REQUEST_LISTINGS_PENDING,
	REQUEST_LISTINGS_SUCCESS,
	REQUEST_LISTINGS_FAILED,
  USER_INPUT_BEDROOMS_MIN,
  USER_INPUT_BEDROOMS_MAX,
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

const userState = {
  from: '08/01/2018',
  to: '09/01/2018',
  bedValue: 1,
  minBeds: 1,
  maxBeds: 1,
  city: '',
  minPrice: '',
  maxPrice: '',

}

export const userSettings = (state=userState, action={}) => {
    switch(action.type) {
    case USER_INPUT_BEDROOMS_MIN:
      return Object.assign({}, state, { userValid: action.payload });
    case USER_INPUT_BEDROOMS_MAX:
      return Object.assign({}, state, { userValid: action.payload });
    default: 
      return state;
  }
}

const initialStateListings = {
  listings: [],
  isPending: true,

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