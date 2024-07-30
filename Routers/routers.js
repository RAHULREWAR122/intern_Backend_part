import express from 'express';
import { login , register ,getUserData, updateUser } from '../Controller/userAuth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserData);
router.put('/update/:id', updateUser);


export default router;

