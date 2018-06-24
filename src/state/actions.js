import { USER_VALID } from './constants.js'

export const isUserAuthorized = (status) => ({
	type: USER_VALID,
	payload: status
});