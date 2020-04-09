import constants from '../constants';
import jwt from 'jsonwebtoken';

export const validateToken = (req, res, next) => {
	let response = {...constants.defaultServerResponse};

	try {
		if (!req.headers.authorization) {
			throw new Error(constants.requestValidationMessage.MISSING_TOKEN);
		}
		// grab token from a header
		const token = req.headers.authorization.split('Bearer')[1].trim();
		// console.log(token);
		
		// decode
		const decoded = jwt.verify(token, process.env.SECRET_KEY || 'mySecretKey');
		console.log(req.headers);
		console.log(req.headers.authorization);
		
		
		// check if expired
		return next();

	} catch (error) {
		console.log('Error', error);
		response.message = error.message;
		response.status = 401;
	}

	return res.status(response.status).send(response);
};
