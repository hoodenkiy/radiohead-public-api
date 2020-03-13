export default {
	defaultServerResponse: {
		status: 400,
		message: '',
		body: {}
	},
	productMessage: {
		PRODUCT_CRETED: 'Product created sucessfully.',
		PRODUCT_FETCHED: 'Product fetched sucessfully.',
		INVALID_PRODUCT_ID: 'Invalid product id.',
		PRODUCT_NOT_FOUND: 'Product not found.',
		PRODUCT_UPDATED: 'Product updated.',
		PRODUCT_DELETED: 'Product deleted.'
	},
	userMessage: {
		USER_CREATED: 'User created sucessfully.',
		DUPLICATE_EMAIL: 'User with this email already exists.',
		USER_NOT_FOUND: 'User not found.',
		INVALID_PASSWORD: 'Incorrect password.',
		LOGIN_SUCCESS: 'Login success.'
	},
	requestValidationMessage: {
		BAD_REQUEST: 'Invalid request.',
		MISSING_TOKEN: 'Missing token.'
	}
};
