
import express from 'express';
import { Auth_Controller } from './auth.controller';
import Zod_Validation_Request from '../../middlewares/zod.validation.request';
import { Zod_Register_Type } from './auth.zod.interface';

const router = express.Router();

// register user api
router.post('/register', Zod_Validation_Request(Zod_Register_Type), Auth_Controller.Register_User_Controller);




export const Auth_Rotuer = router;
