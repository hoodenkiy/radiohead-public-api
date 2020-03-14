import User from '../database/model/user';
import { formatMongoData } from '../helpers';
import bcrypt from 'bcryptjs';

export const addUser = async ({email, password}) => {
	// hash the password
	password = bcrypt.hashSync(password, 10);

	try {
		let user = await new User({email, password});
		let response = user.save();

		return formatMongoData(response);
	} catch (error) {
		console.log('Something went wrong. service: addUser');
		throw new Error(error);
	}
};

export default {
	addUser
}