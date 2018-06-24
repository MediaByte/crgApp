import { USER_VALID } from './constants.js'

const initialState = {userValid: false}

export const isUserAuthorized = (state=initialState, action={}) => {
	switch(action.type) {
		case USER_VALID:
			return Object.assign({}, state, { userValid: action.payload });
		default: 
			return state;
	}
}