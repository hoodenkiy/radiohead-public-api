import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: String,
	password: String
},{
	unique: true,
	timestamps: true,
	toObject: {
		transform(doc, ret, options){
			ret.id = ret._id,
			delete ret._id;
			delete ret.__v;
			delete ret.password;
			return ret;
		}
	}
});

const User = mongoose.model('User', userSchema);

export default User;
