import albumService from '../service/albumService';
import constants from '../constants/';

export const getAllAlbums = async (req, res) => {
	const response = {...constants.defaultServerResponse};

	try {
		const albumServiceResponse = await albumService.getAllAlbums();

		response.status = 200;
		response.message = constants.albumMessage.ALBUMS_FETCHED;
		response.body = albumServiceResponse;
	} catch (error) {
		console.log('Something went Wrong. Controller: getAllAlbums', error);
		response.message = error.message;
	}

	return res.status(response.status).send(response);
};

export const addAlbum = async (req, res) => {
	const response = {...constants.defaultServerResponse};

	try {
		// console.log('req', req);
		console.log('req.body', req.body);
		
		const albumServiceResponse = await albumService.addAlbum(req.body);

		response.status = 200;
		response.message = constants.albumMessage.ALBUM_ADDED;
		response.body = albumServiceResponse;
	} catch (error) {
		console.log('Something went Wrong. Controller: addAlbum', error);
		response.message = error.message;
	}

	return res.status(response.status).send(response);
};

export default {
	addAlbum,
	getAllAlbums
};
