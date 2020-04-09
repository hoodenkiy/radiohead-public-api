import jwt from 'jsonwebtoken';
import User from '../database/model/user';
import constants from '../constants';
import { formatMongoData } from '../helpers';
import bcrypt from 'bcryptjs';

export const addUser = async ({email, password}) => {
	// hash the password
	password = bcrypt.hashSync(password, 10);
	const userExists = await User.findOne({ email });

	// if we have a user, exit & show error message
	if (userExists) {
		throw new Error(constants.userMessage.DUPLICATE_EMAIL)
	}

	try {
		let user = new User({email, password});
		let response = await user.save();

		return formatMongoData(response);
	} catch (error) {
		console.log('Something went wrong. service: addUser');
		throw new Error(error);
	}
};

export const loginUser = async ({email, password}) => {
	try {
		// first find a username
		const user = await User.findOne({ email });

		if (!user) {
			throw new Error(constants.userMessage.USER_NOT_FOUND);
		}

		// compare password
		const isValid = await bcrypt.compare(password, user.password);
		if (!isValid) {
			throw new Error(constants.userMessage.INVALID_PASSWORD);
		}

		const token = jwt.sign(
			// first argument for sign is payload, also known is claims
			{id: user._id},
			// secret key
			process.env.SECRET_KEY || 'mySecretKey',
			{expiresIn: '1d'}
		);

		return { token };

	} catch (error) {
		console.log('Something went wrong. service: loginUser');
		throw new Error(error);
	}
};

export const listUsers = async () => {
	try {
		// first find a username
		const allUsers = await User.find({});
		console.log('user', allUsers);

		return formatMongoData(allUsers);

	} catch (error) {
		console.log('Something went wrong. service: listUsers');
		throw new Error(error);
	}
};

export const deleteUser = async ({ email }) => {
	try {
		// first find a username
		const user = await User.findOneAndDelete({ email });
		console.log('deleteUser', user);

		return formatMongoData(user);

	} catch (error) {
		console.log('Something went wrong. service: deleteUser');
		throw new Error(error);
	}
};

export default {
	addUser,
	deleteUser,
	listUsers,
	loginUser
}