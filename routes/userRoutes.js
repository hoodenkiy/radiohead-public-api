import express from 'express';
const router = express.Router();

import userController from '../controller/userController';
import { validateToken } from '../middleware/validate-token';

router.get('/',
	validateToken,
	userController.listUsers
);

router.post('/add', userController.addUser);
router.post('/login', userController.loginUser);

router.delete('/delete',
	validateToken,
	userController.deleteUser
);

export default router;
