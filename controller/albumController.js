import albumService from '../service/albumService';

export const getAllAlbums = async (req, res) => {
	const response = {...constants.defaultServerResponse};

    try {
        const productServiceResponse = await productService.deleteProduct(req.params);

        response.status = 200;
        response.message = constants.productMessage.PRODUCT_DELETED;
        response.body = productServiceResponse;
    } catch (error) {
        console.log('Something went Wrong. Controller: deletePoduct', error);
        response.message = error.message;
    }

    return res.status(response.status).send(response);
};

export default {
	getAllAlbums
}