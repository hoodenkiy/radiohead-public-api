import Album from '../database/model/album';
import { formatMongoData } from '../helpers/';

// export const getAllAlbums = async ({ skip = 0, limit = 5 }) => {
export const getAllAlbums = async () => {
	try {
		let albums = await Album.find({})
			// .skip(parseInt(skip)) // startrow
			// .limit(parseInt(limit));

			console.log('res', albums);

			return formatMongoData(albums);
	} catch (error) {
		console.log('Something went wrong. service: getAllAlbums');
		throw new Error(error);
	}
};

export const addAlbum = async (serviceData) => {
	try {
		let album = new Album({...serviceData});
		let result = await album.save();
		return formatMongoData(result);
	} catch (error) {
		console.log('Something went wrong. service: addAlbum');
		throw new Error(error);
	}
};

export default {
	addAlbum,
	getAllAlbums
}