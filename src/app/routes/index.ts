import express from 'express';
import { Auth_Rotuer } from '../modules/auth/auth.router';


const router = express.Router();

const project_routes = [
    {
        path:'/auth',
        route: Auth_Rotuer
    }
]


project_routes.forEach(one=>router.use(one.path,one.route));

export default router;