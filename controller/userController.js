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

export const loginUser = async (req, res) => {
	const response = {...constants.defaultServerResponse};

	try {
		const userServiceResponse = await userService.loginUser(req.body);

		response.status = 200;
		response.message = constants.userMessage.LOGIN_SUCCESS;
		response.body = userServiceResponse;
	} catch (error) {
		console.log('Something went Wrong. Controller: loginUser', error);
		response.message = error.message;
	}
 
	return res.status(response.status).send(response);
};

export const listUsers = async (req, res) => {
	const response = {...constants.defaultServerResponse};

	try {
		const userServiceResponse = await userService.listUsers();

		response.status = 200;
		response.message = constants.userMessage.LIST_USERS;
		response.body = userServiceResponse;
	} catch (error) {
		console.log('Something went Wrong. Controller: listUsers', error);
		response.message = error.message;
	}
 
	return res.status(response.status).send(response);
};

export const deleteUser = async (req, res) => {
	const response = {...constants.defaultServerResponse};

	try {
		const userServiceResponse = await userService.deleteUser(req.body);

		response.status = 200;
		response.message = constants.userMessage.USER_DELETED;
		response.body = userServiceResponse;
	} catch (error) {
		console.log('Something went Wrong. Controller: deleteUser', error);
		response.message = error.message;
	}
 
	return res.status(response.status).send(response);
};


export default {
	addUser,
	listUsers,
	loginUser,
	deleteUser
};
