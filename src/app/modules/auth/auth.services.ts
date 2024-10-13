import { Register_User_Type } from "./auth.interface";
import jwt from 'jsonwebtoken'

import pool from "../../Database/db"
import Final_App_Error from "../../class/Final_App_Error";
import httpStatus from "http-status";
import { RowDataPacket } from "mysql2";
import config from "../../config";
import { decodeDataByBcrypt, encodeDatabyBcrypt } from "../../utils/bcrypt";

type LoginType = Pick<Register_User_Type, 'email' | 'password'>


const Register_User_Service = async (data: Register_User_Type) => {

    const { email, name, password } = data;
    const [rows] = await pool.query<RowDataPacket[]>(`
        SELECT email
        FROM users
        WHERE email = ?
        `, [email]);
    if (rows.length > 0) {
        throw new Final_App_Error(httpStatus.CONFLICT, "Email is already registered into the DB");
    }

    const [result] = await pool.query(`
        INSERT INTO users (email,password,name) VALUES
        (?,?,?)
        `, [email, password, name])

    const accessToken = jwt.sign({
        email: email
    }, config.jwt_secret as string, { expiresIn: config.jwt_access_token_exp });
    const refreshToken = jwt.sign({
        email: email
    }, config.jwt_secret as string, { expiresIn: config.jwt_refresh_token_exp });

    return { result, accessToken, refreshToken }
}

const Login_User_Service = async (data: LoginType) => {

    const { email, password } = data;
    const [rows] = await pool.query<RowDataPacket[]>(`
        SELECT * 
        FROM users
        WHERE email = ?
        `, [email]);

    // if the email is not found 
    if (rows.length == 0) {
        throw new Final_App_Error(httpStatus.NOT_FOUND, "email or password may be incorrect *")
    }
    // check the password 
    if (password !== rows[0].password) {
        throw new Final_App_Error(httpStatus.UNAUTHORIZED, "password not matched *");
    }




    const result = rows[0];
    const accessToken = jwt.sign({
        email: email
    }, config.jwt_secret as string, { expiresIn: config.jwt_access_token_exp });
    const refreshToken = jwt.sign({
        email: email
    }, config.jwt_secret as string, { expiresIn: config.jwt_refresh_token_exp });

    return { result, accessToken, refreshToken };
}


export const Auth_Services = {
    Register_User_Service,
    Login_User_Service,

}