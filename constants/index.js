export default {
	defaultServerResponse: {
		status: 400,
		message: '',
		body: {}
	},
	albumMessage: {
		ALBUMS_FETCHED: 'All albums have fetched sucessfully.',
		ALBUM_ADDED: 'Albums has been added sucessfully.'
	},
	userMessage: {
		USER_ADDED: 'User created sucessfully.',
		DUPLICATE_EMAIL: 'User with this email already exists.',
		USER_NOT_FOUND: 'User not found.',
		USER_DELETED: 'User succesfully deleted.',
		INVALID_PASSWORD: 'Incorrect password.',
		LOGIN_SUCCESS: 'Login success.',
		LIST_USERS: 'Here is a list of all users.'
	},
	requestValidationMessage: {
		BAD_REQUEST: 'Invalid request.',
		MISSING_TOKEN: 'Missing token.'
	}
};
