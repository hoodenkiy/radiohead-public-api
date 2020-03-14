import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema({
	title: String,
	released: String
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

const Album = mongoose.model('Album', albumSchema);

export default Album;
