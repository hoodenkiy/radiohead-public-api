const express = require('express');
const router = express.Router();

import userController from '../controller/userController'

router.post('/add', userController.addUser);
router.post('/login', userController.addUser);

export default router;