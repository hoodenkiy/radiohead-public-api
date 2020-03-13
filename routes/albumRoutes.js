const express = require('express');
const router = express.Router();

import albumController from '../controller/albumController'

router.get('/', albumController.getAllAlbums);

export default router;