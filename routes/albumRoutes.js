const express = require('express');
const router = express.Router();

import { validateToken } from '../middleware/validate-token'
import albumController from '../controller/albumController'

router.get('/',
	validateToken,
	albumController.getAllAlbums
);

router.post('/add', albumController.addAlbum);

export default router;