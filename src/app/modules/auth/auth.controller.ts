import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/try.code";
import httpStatus from "http-status";
import { Auth_Services } from "./auth.services";



// register user controller 
const Register_User_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const { result, accessToken, refreshToken } = await Auth_Services.Register_User_Service(req.body)

    res.cookie('refreshToken', refreshToken, {
        secure: true,
        httpOnly: true,
    }).status(httpStatus.OK).json({
        success: true,
        message: "Successfully Register User !",
        data: { result, accessToken }
    })
})

// register user controller 
const Login_User_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const { result, accessToken, refreshToken } = await Auth_Services.Login_User_Service(req.body)

    res.cookie('refreshToken', refreshToken, {
        secure: true,
        httpOnly: true,
    }).status(httpStatus.OK).json({
        success: true,
        message: "Successfully Login User !",
        data: { result, accessToken }
    })
})


export const Auth_Controller = {
    Register_User_Controller,
    Login_User_Controller,

}