import { Router } from 'express';
import UserController from '../controllers/userController';
import validateSearch  from "../middleware/validation"

const router = Router()

router.post('/search', validateSearch, UserController.search)


export default router
