const express = require('express');
const router = express.Router();

import albumController from '../controller/albumController'

router.get('/', albumController.getAllAlbums);
router.post('/', albumController.addAlbum);

export default router;