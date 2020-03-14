import userService from '../service/userService';
import constants from '../constants';

export const addUser = async (req, res) => {
	const response = {...constants.defaultServerResponse};

	try {
		const userServiceResponse = await userService.addUser(req.body);

		response.status = 200;
		response.message = constants.userMessage.USER_ADDED;
		response.body = userServiceResponse;
	} catch (error) {
		console.log('Something went Wrong. Controller: addUser', error);
		response.message = error.message;
	}

	return res.status(response.status).send(response);
};


export default {
	addUser
};
