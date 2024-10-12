

import express, { NextFunction, Request, Response } from 'express';
import router from './routes';
import Global_Error_Handler from './errors/global.error.handler';


const app = express();
app.use(express.json());



app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: "Successfully Run Server 😎"
    })
})

// project routes 
app.use('/api/v1', router);

// global error handler
app.use(Global_Error_Handler);


export default app;